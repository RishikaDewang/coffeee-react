import { useState } from "react";

const FuncComponent = props =>{
    //
    const {name ,age} = props;
    const [count, setCount] = useState(1);
    //Creating a usestate hook
    //usestate hook returns an array which has state variable 
    //and a function to update it
    //it takes the default value of state variable
    //let count = 1;
    
    const increaseCount = ()=>{
            setCount(count + 1);
    };
    
    
    return (
        <div>
            <h2>Name : {name} </h2>
            <h2>Age is {age}</h2>
            <h2>Current count is {count}</h2>
            <button onClick = {increaseCount}>Press Me</button>
          
        </div>
    
    );

};

export default FuncComponent;



/*
Props -- >
Props are properties/values passed by parent component to child components
Any component can't change its props
if the prop of any component changes by its parent  , the component will re- render 



*/