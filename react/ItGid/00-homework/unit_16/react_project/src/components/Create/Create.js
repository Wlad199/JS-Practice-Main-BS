import React from 'react';
import { useState } from 'react';
import env from '../../env.json'
import './Create.css';
function Create() {

  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); // стейт для показа/скрытия ссылки
  const [formClass, setFormClass] = useState(''); // стейт для показа/скрытия формы

   // ф-я для отправки данных на сервер
    let sendData = (obj) => {
        //скрываем форму
        setFormClass('hide')
        //отображаем ссылку
        setLineClass('')
        fetch(env.urlBackend, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj),
        })
            .then(data => data.json())
            .then(data => {
                   if (data.result) {
                    setUrl(env.url + '/' + data.url);
                }
            });
    }

  // ф-я для отправки данных на сервер
    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        // функция для передачи данных (note данные из textarea)
        sendData({ "note": note }); 
    }

    return (
        <div className = "create">
      <form action="" onSubmit={loadDataFromForm} className = {formClass}>
      <label htmlFor="note">Введите заметку</label>
      <textarea name="note"  defaultValue="Test" id="note"></textarea>
      <button  type="submit">Создать</button>
      </form>

    <div className = {lineClass}>
          <div className = "link">{url}</div>
          <div><button onClick = {function(){window.location.reload()}}>Создать новую заметку</button></div> 
      </div>
        </div>
    );
}

export default Create;