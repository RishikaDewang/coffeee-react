import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import NewCompWithProps from './NewCompWithProps';

function App() {

  const message = ()=>{
    return "Welcome to coffeee"
  }

  const name ="Rishika"
  return (
    <div className='App'>
    <h1>Coffee Sample App</h1>
    <>
    <MyComponent/>
    <div>{message()}</div>
    <h1>Welcome , {name}</h1>
    <NewCompWithProps name="Rishika" age="22"/>
    <NewCompWithProps name="Rishu" age ="21"/>
    <NewCompWithProps name = "Rish" age ="20"/>
    
    </>
    
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
