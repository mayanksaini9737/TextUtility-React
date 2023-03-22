import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        // console.log("clicked on onClick: " + text) 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearclick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied","success");
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space","success");
    }

    const handleOnchange = (event)=>{
        // console.log("clicked on onChange")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "Wrong way to change to change state";
    // setText = "Correct way to change state"
  return (
    <>
    <div className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-5">
            <textarea value={text} className="form-control my-5" onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#042738':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="12"></textarea>
        </div>        
            <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearclick}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove ExtraSpace</button>
    </div>
    <div className="container my-5" style={{ color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{(text.split(" ").length)-1} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
