import React, {useState } from 'react';
// import CommentListHook from './CommentListHook';
import Comment2ListHook from './Comment2ListHook';

function Comment2Hook() {
  const[data, setData] = useState([]);

  let selectHandler = (event) => {
   let value = event.target.value;
   fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
   .then(respons => respons.json())
   .then(data => {
    setData(data)
   })
  }
 
  return (
  <>
   <select onChange = {selectHandler} name="" id="">
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   </select>
  {/* <CommentListHook prop1 = {data} /> */}
  <Comment2ListHook data = {data}/>
  </>
  );
}

export default Comment2Hook;
