import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'
import NewComp from './newComponent'
export default function App() {
  const counter= useSelector(state=>state.counter)
  const isLogged= useSelector(state=>state.isLogged)
  const dispatch =useDispatch();


  return (
    <div className="App">
      
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <h1>Welcome</h1>
      <NewComp/>
     {isLogged ?<h3>Valuable Information I shoun see</h3>: ''}
  
    </div>
  )
}
