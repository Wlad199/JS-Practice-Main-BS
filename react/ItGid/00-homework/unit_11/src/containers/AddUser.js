import {useDispatch} from 'react-redux'; // импортируем useDispatch для диспетчиризации
import {addNewUsers} from '../action';

const AddUser = () => {
const dispatch = useDispatch(); // для удобства делаем переменную
const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    let data = event.target.elements;  // получаем елементы формы
    dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value)) // Это функция которая принимает у нас action (addUser). C dispatch отправляю в addUser, блоки данных.

}

//создаем форму
    return(
        <div>
            <form onSubmit = {formHandler}>
              <div>
               <div>
               <input type="text" name = 'passport' defaultValue = ''/>
               </div>
             <div>
             <input type="text" name = 'name' defaultValue = ''/>
             </div>
             <div>
             <input type="text" name = 'age' defaultValue = ''/>
             </div>
              <button type = 'submit'>Отправить</button>
              </div>
            </form> 
        </div>
    )
}
export default AddUser;