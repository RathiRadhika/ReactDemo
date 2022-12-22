//1) Import Rect and React dom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//2) Get a reference to the div with rrot ID
const el=document.getElementById('root');

//3)Tell React to take control
const root= ReactDOM.createRoot(el);

//4)Create a component
function App(){
   // <h4>This is not shown!</h4>
//    let message='Bye there!'
//    if(Math.random()>0.5){
//        message="Hello"
//    }

    // const date= new Date();
    // const time=date.toLocaleTimeString();
    // return <h1>{message}</h1>
    //return <h1>{time}</h1>
    //return <h1>{new Date().toLocaleTimeString()}</h1>
    // const name='radhika';
    // const age=23;
    // return <h1>
    //     Hi,My name is {name} and my age is {age}
    //     </h1>

    //return <input type="number" />

    //return <textarea autoFocus={true} maxLength={5}/>

    return (
        <input placeholder="hi there"/>
    );
}

//5)Show the component on screen
root.render(<App/>);
