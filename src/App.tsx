import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent1, { TestComponent2, TestComponent3, TestComponent4, TestComponent5, TestComponent6, TestComponent7, TestComponent8, TestComponent9 } from './components/test-component';
import ConfirmPopup from './components/confirm-popup';
import MainComponent from './components/main-component';


function App() {

  const newLineStyle = {
    backgroundColor: 'lightgray',
    padding: '0.5px',
    border: '1px solid darkgray',
    width: '100%',
  };

/* ---------------- Pass function as values to prop // TestComponent6 ---------------- */
  function handleTestButtonClicked1() {
    console.log("Pass function as values to prop - TestComponent6");
    alert("Pass function as values to prop - TestComponent6");
  }


  function handleTestButtonClicked2(value: string) {
    console.log("Pass function as values to prop - TestComponent6", value);
    alert("Pass function as values to prop - TestComponent6"+ value);
  }


    /* ---------------- States in react ---------------- */
    const[dataToShow, setDataToShow] = useState("TestData");
    const[newDataToShow, setNewDataToShow] = useState("TestNewData");
    
    function handleTestButtonClicked3(value: string) {
      setDataToShow('TestDataUpdated');
      setNewDataToShow('TestNewDataUpdated');
    }
    
    // grouping 2 useState into 1, by passing object in useState
    const[dataObject, setDataObject] = useState({
      dataToShow: 'data1',
      newDataToShow: 'data2'
    });

    function handleTestButtonClicked4() {
      // setDataObject({
      //   ...dataObject,
      //   dataToShow: "Data1 replaced by Data1",
      //   newDataToShow:"Data2 replaced by New Data22"
      // });

      // alternate better way use 'prevState' inbuilt method provide by useState,
      // it ensure always get updated prev state of data.
      setDataObject((prevState)=>{
        return{
          ...prevState,
          dataToShow: "Data1 replaced by Data1",
          newDataToShow: "Data2 replaced by New Data22"
        }       
      });
    }

    /* ---------------- Two way data binding ---------------- */
    const[inputValue, setInputValue] = useState("Default Value");
    function getInputData(event:{target:{value:React.SetStateAction<string>;};}) {
      setInputValue(event.target.value);
    }

    /* ---------------- Child to parent component communication ---------------- */
    function handleTestComponentChange(dataFromTestComponent:string):void {
      alert(dataFromTestComponent);
    }

    /* Lifting state up -- use parent component to pass data/state between two component */
    const [testData, setTestData] = useState('');
    function handleTestComponentChange2(dataFromTestComponent:string) : void {
      setTestData(dataFromTestComponent);
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
        <hr style={newLineStyle}/>

        <TestComponent3 idToShow={20}>
          TestComponent3 Data From App Component
        </TestComponent3>
        
        {/* Passing & Accessing string data inside of Component Tag using Children */}
        <hr style={newLineStyle}/>
        <TestComponent4>
          <b> HTML data passing through app </b>
        </TestComponent4>
        
        {/* ---------------- Event listening ---------------- */}
        <TestComponent5/>

        {/* window confirmation popup */}
        <ConfirmPopup/>
        
        <br/>

         {/* ---------------- Pass function as values to prop ---------------- */}
        <TestComponent6 onButtonClicked={handleTestButtonClicked1} idToShow={1}/>
        
        {/* with passing custom value from App component */}
        {/* <TestComponent6 onButtonClicked={()=>handleTestButtonClicked2("passing value from component")} idToShow={2} /> */}
        
        {/* with passing custom value from child component */}
        <TestComponent6 onButtonClicked={(data:string)=>handleTestButtonClicked2(data)} idToShow={2} />

        {/* ---------------- States in react ---------------- */}
        <hr style={newLineStyle}/>
        {dataToShow} 
        <br/>
        {newDataToShow}
        <TestComponent7 onButtonClicked={()=>handleTestButtonClicked3("Test component value")} /> 

        {/* grouping 2 useState into 1, by passing object in useState */}
        
        {dataObject.dataToShow} 
        <br/>
        {dataObject.newDataToShow}
        <TestComponent7 onButtonClicked={()=>handleTestButtonClicked4()} /> 

        {/* ---------------- Two way data binding ---------------- */}
        <br/>
        <hr style={newLineStyle}/>
        <input type='text' value={inputValue} onChange={getInputData} />
        
        {/* ---------------- Child to parent component communication ---------------- */}
        <TestComponent8 onTestCmponentChange={handleTestComponentChange}/>

        {/* Lifting state up -- use parent component to pass data/state between two component */}
        {/* App is Stateful Component */}
        <hr style={newLineStyle}/>
        <TestComponent9 onTestCmponentChange={handleTestComponentChange2} />
        <MainComponent data={testData} />

        <br/> <br/>
      </header>
    </div>
  );


}

export default App;
