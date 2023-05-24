import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("function button was clicked");
    console.log("function click was logged");
  }
  return (
    <>
      <button onClick={clickHandler}>Function Click</button>
    </>
  );
}
    
export default FunctionClick;