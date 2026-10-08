import React, { useState } from 'react';
 
export default function TextForm(props) {
  const [text, setText] = useState('');
 
  const isDark = props.mode === 'dark';
  const textColor = isDark ? 'white' : 'black';
 
  const handleUpClick = () => {
    setText(text.toUpperCase())
    props.showAlert("Converted to Uppercase!","success")
  };
  const handleLoClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase!","success")
  };
  const handleClearClick = () => {
    setText('')
    props.showAlert("Text has been cleared","success")
  };
 
  const handleCopy = () => {
    const el = document.getElementById('myBox');
    el.select();
    navigator.clipboard.writeText(el.value);
  };
 
  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(' '));
  };
 
  const handleOnChange = (event) => setText(event.target.value);
 
  const wordCount = text.split(/\s+/).filter((w) => w.length > 0).length;
 
  return (
    <>
      <div className="container" style={{ color: textColor }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: isDark ? '#13466e' : 'white',
              color: textColor,
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
 
      <div className="container my-3" style={{ color: textColor }}>
        <h2>Your text summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
 