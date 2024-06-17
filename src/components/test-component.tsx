
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

//  Pass function as values to prop // TestComponent6 
export function TestComponent6({onButtonClicked,idToShow}:{onButtonClicked:any, idToShow:number}) {
    
    return (
        <div>
            {/* <button onClick={onButtonClicked}> Click Me! TestComponent6 {idToShow} </button> */}
            <button onClick={()=>onButtonClicked("data from child component")}> Click Me! TestComponent6 {idToShow} </button>
        </div>
    );
    
}


export default TestComponent1;