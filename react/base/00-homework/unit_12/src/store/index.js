import {configureStore} from '@reduxjs/toolkit'; // специальная ф-я redux для конфигурации хранилища
import goodsReducer from './goodsSlice'; //импортируем reducer
import cartReducer from './cartSlice';  //импортируем reducer


// Cоздаем хранилища goods и cart, а для работы с этими хранилищами создаем редьюсеры goodsReducer, cartreducer
export default configureStore({
    reducer : {
        goods: goodsReducer,
        cart: cartReducer
    },
})