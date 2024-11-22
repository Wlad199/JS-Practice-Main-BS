import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const f1 = React.createRef();
  const f5 = React.createRef();
  const f8 = React.createRef();
  const f10 = React.createRef();

  const[st1, setSt1] = useState();
  const[st2, setSt2] = useState(0);
  const[st3, setSt3] = useState();
  const[st4, setSt4] = useState(0);
  const[st5, setSt5] = useState();
  const[st6, setSt6] = useState();
  const[st7, setSt7] = useState();
  const[st8, setSt8] = useState();
  const[st9, setSt9] = useState();
  const[st10, setSt10] = useState([]);


  function task1() {
    let data = f1.current.value
    setSt1(data)
  }
  function task2() {
  let count = st2
  count++
  setSt2(count)
  }
  function task3(e) {
   setSt3(e.target.value)
  }
  function task4() {
    let count = st4
    count++
    setSt4(count)
  }
  function task5() {
   setSt5(f5.current.value)
  }
  function task6(e) {
   setSt6(e.target.value)
  }
  function task7() {
    let min = 0;
    let max = 255;
    let r = Math.floor(Math.random()* (max - min + 1)) + min;
    let g = Math.floor(Math.random()* (max - min + 1)) + min;
    let b = Math.floor(Math.random()* (max - min + 1)) + min;
    let color = `rgb(${r}, ${g}, ${b})`
    setSt7(color)
  }

  function task8() {
    let strValue = f8.current.value;
    let last = strValue.charAt(strValue.length-1);
    let reg = /^\d+$/;
    let str = ''
    if(!reg.test(last)){
      str += 1
    }
      else{
        str += 0
  }
  setSt8(str)

  console.log(str);
  }

  function task9(e) {
   setSt9(e.target.value)
  }

  function task10() {
    let data = f10.current.value;
    let value = [...st10, data];
    setSt10(value);
    f10.current.value = '';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input  type="text" className = 'task' ref = {f1} />
        <button onClick = {task1} className="task-1" >Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div onMouseEnter = {task2} className="task-2"></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input onInput = {task3} type="text" className="task-3" />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button onClick = {task4} className="task-4">Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input onChange = {task5} type="checkbox" value="55" ref = {f5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select onChange = {task6} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div style = {{backgroundColor: st7}} className="block-7"></div>
        <button onClick = {task7} className="task-7">Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input onKeyPress = {task8} type="text" className="task-8" ref = {f8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input onInput = {task9} type="range" className="task-9"></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref = {f10}></input>
        <button onClick = {task10} className="task-10">Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
