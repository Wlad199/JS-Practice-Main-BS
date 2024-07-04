import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}, 
        totalSum: 0
       
    },
    reducers: {
       increment : (state, data) => { // инкремент принимает state и data - артикул того елемента по которому кликнули(data получаем из dispatch в GoodList)
           let articul = data.payload; // сами данные лежат под ключом payload, поетому вытягиваем в переменную
           if(state.value[articul] === undefined) state.value[articul] = 0; // если артикула нет то нужно создать и количество товара 0
           state.value[articul]++; // если есть увеличиваем на 1
       },

    minus: (state, data) => { 
        let articul = data.payload; 
        if(state.value[articul] < 1) delete state.value[articul]
        state.value[articul]--; 
    },

    del: (state, data) => { 
        let articul = data.payload; 
       delete state.value[articul]
    },

    totalSum: (state, data) => { 
        let item = data.payload
         state.totalSum = item 
    },


    }
})

export const {increment, minus, del, totalSum} = cartSlice.actions; // надо експортировать инкремент
export const selectCart = state => state.cart.value; // делаем геттер для получения данных
export const selectSum = state => state.cart.totalSum; // делаем геттер для получения данных
export default cartSlice.reducer;