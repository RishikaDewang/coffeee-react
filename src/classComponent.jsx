import React from "react";

class ClassComponent extends React.Component {
    
    constructor(props){ 
    //1
    super(props);
    console.log("constuctor is printed");
    this.state = {value : 10};
    //inherit parent props and set initial state 
    }

    changeCount = () =>{
        this.setState({
            count : this.state.count + 1
        })
    };

    static getDerivedStateFromProps(){ 
        //2
        console.log("getDerivedStateFromProps is printed");
        return 10;
        // If we want to pass something to render function
    }

    componentDidMount(){ 
        //4
        console.log("componentDidMount is printed");
        // this is called when the component is mounted 
        
        //e.g. starting a timer
        //api calls
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is printed");
        // this is called when the component has re-rendered
        
        //e.g. starting a timer
        //api calls
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate is printed");
        return true;
        //whether the component should should re-render or not . returns true/false
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate");
        return null;
        //used for comparing old and new values after update 
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount is printed");
        // called before unmounting of a component 

        //clear all timers ,event listener
    }

    render(){ 
        //3
        //actually printing the jsx
        console.log("render is printed");

        return (
            <div>
                <h1>This is a class Component</h1>
                <h1>current count : {this.state.count} </h1>
                <button onClick= {this.changeCount}> Change count</button>

            </div>
            
            )
    }

}

export default ClassComponent;