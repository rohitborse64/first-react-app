import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent1, { TestComponent2, TestComponent3, TestComponent4, TestComponent5, TestComponent6 } from './components/test-component';
import ConfirmPopup from './components/confirm-popup';

function App() {


  // Pass function as values to prop // TestComponent6
  function handleTestButtonClicked1() {
    console.log("Pass function as values to prop - TestComponent6");
    alert("Pass function as values to prop - TestComponent6");
  }

  // Pass function as values to prop // TestComponent6
  function handleTestButtonClicked2(value: string) {
    console.log("Pass function as values to prop - TestComponent6", value);
    alert("Pass function as values to prop - TestComponent6"+ value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        {/* Reusability of Component with props*/}
        <TestComponent1 dataToShow="Data from TestComponent"/>
        <TestComponent1 dataToShow="Data from TestComponent"/>

        {/* Reusability of Component with multi props & destructuring */}
        <TestComponent2 dataToShow="Data from TestComponent2" idToShow={11}/>
        <TestComponent2 dataToShow="Data from TestComponent2" idToShow={22}/>
        <TestComponent2 dataToShow="Data from TestComponent2" idToShow={33}/>

        {/* Passing & Accessing string data inside of Component Tag using Children */}
        <TestComponent3 idToShow={20}>
          TestComponent3 Data From App Component
        </TestComponent3>
        
        {/* Passing & Accessing string data inside of Component Tag using Children */}
        <TestComponent4>
          <b> HTML data passing through app </b>
        </TestComponent4>
        
        {/* ---------------- Event listening ---------------- */}
        <TestComponent5/>

        {/* window confirmation popup */}
        <ConfirmPopup/>
        
        <br/>

         {/* Pass function as values to prop // TestComponent6 */}
        <TestComponent6 onButtonClicked={handleTestButtonClicked1} idToShow={1}/>
        
        {/* with passing custom value from App component */}
        {/* <TestComponent6 onButtonClicked={()=>handleTestButtonClicked2("passing value from component")} idToShow={2} /> */}
        
        {/* with passing custom value from child component */}
        <TestComponent6 onButtonClicked={(data:string)=>handleTestButtonClicked2(data)} idToShow={2} />

      </header>
    </div>
  );


}

export default App;
