import './App.css';
import React from 'react';
import {useState} from 'react';

function App() {
  const value = React.createRef(); 
 
  let [res, setRes] = useState([]);
   function func1(){
      let data = value.current.value;
      if(data != ''){
         setRes(res.concat(React.createElement('li', {}, data)))
      }    
     }
    

  const h1 = React.createElement('h1',{},'Unit_08');

  const h2 = React.createElement('h2',{'style': {
    'color': 'orange'
  }},'header 2');

  const p = React.createElement('p',{'style': {
    'color': 'red'
  }},'this is p');

  const p1 = React.createElement('p',{}, 'hi')
  const p2 = React.createElement('p',{}, 'world');
  const div = React.createElement('div',{'className': 'text-grey'}, p1, p2);
  const input = React.createElement('input',{defaultValue: 55})

  const input2 = React.createElement('input',{ref: value})
  const but = React.createElement('button',{onClick: func1}, 'Button')

  return (
      <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      {input2}
      {but}
      <ul>
        {res}
      </ul>
      </>
  );
}

export default App;
