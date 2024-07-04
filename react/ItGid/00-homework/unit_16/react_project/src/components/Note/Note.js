// позволяет принять сообщение (расшифровать и показать) http://localhost:3000/note/uvmhl9n3l7xb7nn8witv4sod
import './Note.css';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'; // Хук дает доступ к параметрам поиска в URL;
import env from '../../env.json';

function Note() {
  let {noteURL} = useParams(); // сюда попадет uvmhl9n3l7xb7nn8witv4sod часть
  let [noteText, setNoteText] = useState('');
  let [lineClass, setLineClass] = useState('hide');
  let [formClass, setFormClass] = useState('hide');
  let [errorClass, setErrorClass] = useState('hide');


  useEffect(() => {
    // проверяем или пользователь ввел полностью адрес
    if(noteURL !== undefined){ 
      fetch(env.urlBackend, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"url" : noteURL}),
    })
        .then(data => data.json())
        .then(data => {
                if (data.result) {
                setNoteText(data.note) //записуем в стейт uvmhl9n3l7xb7nn8witv4sod 
                setLineClass('')
                setFormClass('hide')
                setErrorClass('hide')
            }
            else if (!data.result){
               setLineClass('hide')
               setFormClass('hide')
               setErrorClass('')
            }
        });
    }
    //если пользователь перешол по note нужно скрыть блок <div>{noteText}</div> и показать форму
    else{
       setLineClass('hide');
       setFormClass('');
       setErrorClass('hide');
    }
  }, []);

  function getNote(event){
   event.preventDefault();
   let url = event.target.elements.url.value;
   url = url.trim();
   if (url === '') {
    alert('Заполните поля');
    return false;
}
// функция для передачи данных (note данные из textarea)
noteURL = url;
window.location.href = env.url + '/' + url;
}

function searchNote(){
  window.location.href = env.url;
}

  //елемент скрыт, нужно показать когда отрабатывает запрос
    return (
      <div className = "create">
        <div className = {lineClass}>
          <h4>Note:</h4>
          <div>{noteText}</div>
          <div><button onClick = {searchNote}>Смотреть еще один note</button></div>
        </div>
        <div className = {errorClass}>
          <p>Произошла ошибка. Такой хеш не найден</p>
        </div>
        <div className = {formClass}>
          <form action="" onSubmit = {getNote}>
          <label htmlFor="url">Введите hash заметки</label>
          <input type="text" name = "url" id = "url" className = "form-control"/>
          <button type = "submit" className = "btn btn-primary">Искать Note</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Note;