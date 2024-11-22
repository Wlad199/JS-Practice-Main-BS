
import React from 'react';

class Homework1 extends React.Component {
 constructor(props){
   super(props);
   console.log(props.dataP1);
   this.state = {
    s1: props.dataP1
   }
   this.s2 = 201;
 }
//  static getDerivedStateFromProps(props, state){
//    return ({s1 : props.dataP1})
//  }
// Не работает(

 componentDidMount(){
  let newS1 = this.state.s1 + 5;
  let newS2 = this.s2 + 5;
  this.setState({s1 : newS1})
  this.s2 = newS2;
 }

 buttonHandler = () => {
  let count = this.state.s1
  let count2 = this.s2
  count+=50
  count2+=50
  this.setState({s1: count})
  this.s2 = count2
 }

  render(){
    return (
    <>
     <div>{this.state.s1}</div>
    <div>{this.s2}</div>
    <button onClick = {this.buttonHandler}>Button</button>
    </>
    );
  }
  
}

export default Homework1;