import React, { useState,useEffect } from 'react'//importing the methods form react library -> named imports {}
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/common/Navbar.jsx';


function App() {
  return(
    <>
      <Navbar />
      
    </>
  )
}
 export default App;
// class App extends React.Component{
//   // state is an object that holds the data of the component
//   // state is used to store the data that can change over time in key value pairs
//   // when the state changes, the component re-renders
//   //component is a class that extends React.Component 
//   //render is a method that returns the JSX to be rendered
//   // JSX is a syntax extension that allows us to write HTML-like code in JavaScript
//   state = { 
//   product : "Iphone",
//   price : 12000
//  }

//   render(){
//     return(
//       <>
//       <h1> Product : {this.state.product}</h1> {/* this is used because we are inside a class component */}
//       <h1> Price : {this.state.price} </h1>
//       <input id = 'price' type='number' />
//       <button onClick = {()=>{ 
//         let p = document.getElementById('price').value;
//         //console.log(p);
//         this.setState({price: p})
//         }}>Update</button>
//       </>
      
//     )
//   }
// }
// export default App;
//---------------------------------------------------------------
// functional component -> useState, useEffect are hooks that can only be used inside functional components
// function Test(){
//   //call the useState hook to create a state variable and a function to update it
//   let [counter, setCounter]= useState(0) // useState returns an array with two elements: the current state and a function to update it

//   return(
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick = {()=> setCounter(counter + 1)}>Increment</button>
//       <button onClick = {()=> setCounter(counter - 1)} > Decrement</button>
//       <button onClick = {()=> setCounter(0) }>RESET </button>
//     </div>
//   )
// }
// export default Test;

// -----------------------------------------------------------------
// class App extends React.Component{
//   state = {
//     counter: 0
//   }
//   render(){
//     return(
//       <div>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={() => {
//           this.setState({ counter: this.state.counter + 1})
//         }}>Increment</button>
//         <button onClick={() => {
//           this.setState({counter: this.state.counter - 1})
//         }}>Decrement</button>
//         <button onClick={() => {
//           this.setState({counter: 0})
//         }}>RESET</button>
//       </div>
//     )
    
//   }

// }
// export default App;

// ----------------------------------------------------------

// const App = () => {
//   const [count, setCount] = useState(0)

//   const [data,setData] = useState([])

//   // useEffect(() => {
//   //   ApiCall();
//   //   console.log('one-----');
//   // },[])

//   // useEffect(()=>{

//   // })

//   useEffect(() => {
//     ApiCall();
//     console.log('three-----');
//   },[data])


//   const ApiCall = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         // setData(json);
//         // console.log(json);
//         // console.log('data---->',data)
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }
//   return (
//     <div>
//       <header><h1>My Portfolio</h1></header>
//       <section>
//         <p>Hello! I am Meghanaa</p>
//         <p>React Developer</p>
        
//       </section>
//       <footer></footer>
      
//     </div>
//   )}  

//   export default App;