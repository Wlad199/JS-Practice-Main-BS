//создаем action, который в AddUser.js. action трансформируется и принимает три параметра и возвращает обьект
export const addNewUsers = (passport, name, age) => ({
    type: 'ADD_USER',
    passport,
    name,
    age
});