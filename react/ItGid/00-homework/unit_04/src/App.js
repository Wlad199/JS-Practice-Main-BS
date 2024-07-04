import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let selValue = React.createRef();
  let inValue = React.createRef();
  let inRange = React.createRef();
  let inNumber = React.createRef();

  const [classQuare, setClassQuare] = useState('task-2');
  const [check, setCheck] = useState();
  const [output, setOutput] = useState();
  const [colorNow, setColor] = useState();
  const[input, setInput] = useState();
  const[inrange, setRange] = useState();


  function task1() {
    console.log('task2');
  }

  function task2() {
    setClassQuare('task-2 active')
    }

  function task3(e) {
   console.log(e.target.value);
  }

  function task4() {
    let count4 = 0; 
    return function(){
      console.log(count4++);
    }
  }

  function task5(e) {
 let value = e.target.value;
 if(e.target.checked){
  setCheck(value)
 }
 else{
  setCheck('')
 }
  }

  function task6() {
  setOutput(selValue.current.value)
  }

  function task7() {
    let min = 0;
    let max = 255;
    let r = Math.floor(Math.random()* (max - min + 1)) + min;
    let g = Math.floor(Math.random()* (max - min + 1)) + min;
    let b = Math.floor(Math.random()* (max - min + 1)) + min;
    let color = `rgb(${r}, ${g}, ${b})`
    setColor(color)
  }

  function task8() {
    let strValue = inValue.current.value;
    let last = strValue.charAt(strValue.length-1);
    let reg = /^\d+$/;
    if(!reg.test(last)){
      setInput('1')
    }
      else{
      setInput('0')
  }
}

  
  function task9() { 
     setRange(inRange.current.value)
  }

  let ar10 = [5, 6, 7];
  function task10() {
  ar10.push(+inNumber.current.value)
  console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick = {task1} className="task-1">Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter = {task2} className={classQuare}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onChange = {task3} type="text" className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick = {task4()} className="task-4">Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange = {task5} type="checkbox" value="55" />
        <div className="out-5">{check}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select onChange = {task6} className="task-6" ref = {selValue}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div style = {{background:colorNow}} className="block-7" ></div>
        <button onClick = {task7} className="task-7">Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input onKeyPress = {task8} type="text" className="task-8" ref = {inValue}></input>
        <div className="out-8">{input}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input onInput = {task9} type="range" className="task-9" ref = {inRange}></input>
        <div className="out-9">{inrange}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input  type="number" className="i-10" ref = {inNumber}></input>
        <button onClick = {task10} className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
