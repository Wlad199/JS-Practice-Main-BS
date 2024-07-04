function Cart(props){

    return(
        <div className = 'table'>
           <div><img className = 'img' src={props.image} alt=""/> </div>
         <table  >
           <tbody >
           <tr>
                 <td >{props.title}</td>
                 <td>{props.cost}</td>
                 <td>{props.count}</td>
                 <td>{props.sum}</td>
          </tr>
           </tbody>
         </table>
         <button className = 'minus' data-key = {props.datakey}>-</button>
          <button className = 'delete' data-key = {props.datakey}>Delete</button>
          </div>
    )
}

export default Cart;