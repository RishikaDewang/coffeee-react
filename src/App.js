
import logo from './logo.svg';
import './App.css';
import React , {useState}  from 'react';
import MyComponent from './MyComponent';
import FuncComponent from './FuncComponent';
import ClassComponent from './classComponent';

function App() {
  const [name , setName] = useState("Rishika");
  const [showFuncComponent , setShowFuncComponent] = useState(false);
  const changeName = ()=>{
    setName(name + "  Rishu");
  }
  /*setTimeout( () =>{
    setName("Rishu");
  },2000)
  */

  const changeView = () =>{
    setShowFuncComponent(!showFuncComponent);
  } 

  
  const message = ()=>{
    return "Welcome to coffeee"
  };

  
  
  return (
    <div className='App'>
    <h1>Coffee Sample App</h1>
    <button onClick={changeName} >change name</button>
    {showFuncComponent === true ? 
    (<FuncComponent name={name} age="22"/>)
    :null}

    {showFuncComponent === false ? <ClassComponent/> : null}
    
    <button onClick={changeView}>Change view</button>
    {/*<>
    <MyComponent/>
    <div>{message()}</div>
    <h1>Welcome , {name}</h1>
    <FuncComponent name="Rishika" age="22"/>
    <FuncComponent name="Rishu" age ="21"/>
    <FuncComponent name = "Rish" age ="20"/>
    
  </>*/}
    
    </div>
  );
}

export default App;

/*

JSX - Javascript and XML
Very similar to HTML
IT should not return more than one parent component

if more than one component, it should be wrapped inside a component or React fragment

* Differnce between HTML and JSX

HTML          JS6

class         className
onclick       onClick
onchange      onChange

eventlistener will change a little

In JSX ,any component can only return one parent element

<React.Fragment>

</React.Fragment>

<></>
*/
