import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectGoods} from '../store/goodsSlice'; // данные товаров
import {selectCart} from '../store/cartSlice';  // данные корзины
import {selectSum} from '../store/cartSlice';
import Cart from '../components/Cart';
import{minus} from '../store/cartSlice';
import{del} from '../store/cartSlice';
import{totalSum} from '../store/cartSlice';


function CartList(){
    const goods = useSelector(selectGoods); // получаем товары
    const cart = useSelector(selectCart); // получаем корзину
    const dispatch = useDispatch(); // сокращаем метод dispatch
    const sum = useSelector(selectSum)
    // переиндексация масива товаров
    const goodsObj = goods.reduce((acc, item) => {
        acc[item['articul']] = item;
        return acc
    }, {})

    
   let masArt = Object.keys(cart)
   let masCost = masArt.map(item => cart[item]*goodsObj[item]['cost'] )
   if(masCost.length > 0){
    var total = masCost.reduce((a,b) => a+b)
    dispatch(totalSum(total))
   }
  

    let clickHandler = (event) => {
        event.preventDefault()
        let t = event.target;

        if(t.classList.contains('delete')) 
        dispatch(del(t.getAttribute('data-key')))
    
        if(t.classList.contains('minus')) 
        dispatch(minus(t.getAttribute('data-key')))
     }

  
     return(
         <>
          <table ></table>
         <div onClick = {clickHandler}>
          {Object.keys(cart).map(item => <Cart title = {goodsObj[item]['title']} cost = {goodsObj[item]['cost']} count = {cart[item]} sum = {cart[item]*goodsObj[item]['cost']} datakey = {goodsObj[item]['articul']} image={goodsObj[item]['image']} key={item}/> ) }
        </div> 
        <div>
          <p>Total sum: {sum}</p>
        </div>
 </>
    )
}

export default CartList;

