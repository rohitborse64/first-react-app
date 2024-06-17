
import './test-component.css'

export function TestComponent1(props:{dataToShow:string}){

    let tempVar:string = "Hello";

  return(
    <div>
        <h4> {tempVar}, {props.dataToShow}, In Test Component</h4>
    </div>
  ); 
}

export function TestComponent2({dataToShow,idToShow}:{dataToShow:string,idToShow:number}){

    let tempVar:string = "Hello";

  return(
    <div>
        <h4> {tempVar}, {dataToShow}, {idToShow}, In Test Component</h4>
    </div>
  ); 
}

export function TestComponent3(props:{idToShow:number, children:string}){
    let tempVar:string = "Hello";
  return(
    <div className="test-component3-bggradient">
        <h4> {tempVar}, {props.idToShow}, {props.children}, In Test Component</h4>
    </div>
  ); 
}

export function TestComponent4(props:{children:any}){
  return(
    <div>
        {props.children}- with TestComponent4
    </div>
  ); 
}


// ---------------- Event listening ----------------
export function TestComponent5(){

    function handleClick(){
        console.log("On Button Click");
        alert("On Button Click");
    }

    return(
      <div>
          <button type="button" onClick={handleClick}> Click Me! TestComponent5 </button>
          {/* <button type="button" onClick={()=>handleClick()}> Click Me! </button> */}
      </div>
    ); 
}

// ---------------- Pass function as values to prop ----------------
export function TestComponent6({onButtonClicked,idToShow}:{onButtonClicked:any, idToShow:number}) {
    
    return (
        <div>
            {/* <button onClick={onButtonClicked}> Click Me! TestComponent6 {idToShow} </button> */}
            <button onClick={()=>onButtonClicked("data from child component")}> Click Me! TestComponent6 {idToShow} </button>
        </div>
    );    
}

/* ---------------- States in react ---------------- */
export function TestComponent7({onButtonClicked}:{onButtonClicked:any}) {
    
  return (
      <div>
          <button onClick={onButtonClicked}> Click Me! TestComponent7 </button>
      </div>
  );
  
}

/* ---------------- Child to parent component communication ---------------- */
export function TestComponent8({onTestCmponentChange}:{onTestCmponentChange:any}) {
  function handleButtonClick():void{
    onTestCmponentChange("data passed from TestComponent8");
  }
  return (
    <div>
      <button onClick={handleButtonClick}> Child to Parent component communication </button>
    </div>
  )
}

/* Lifting state up -- use parent component to pass data/state between two component */
// ------- stateless component
export function TestComponent9({onTestCmponentChange}:{onTestCmponentChange:any}) {
  function handleButtonClick():void{
    onTestCmponentChange("data passed from TestComponent9 to Main");
  }
  return (
    <div>
      <button onClick={handleButtonClick}> pass data/state between two component. </button>
    </div>
  )
}


export default TestComponent1;