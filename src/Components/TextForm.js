import React, { useState } from "react";

export default function TextForm(props) {
  const handlecClick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handlelowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleUpClick = () => {
    //console.log("Upper case clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  };
  //State hook
  const [text, setText] = useState("Enter the text"); //default value within quotes
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-success mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-1" onClick={handlecClick}>
          {" "}
          Clear{" "}
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          {text.split("").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read </p>
        <h4>PREVIEW</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
