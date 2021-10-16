import React, { useState } from 'react';
export default function Textform(props) {
    const HandleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let NewText = text.toUpperCase();
        setText(NewText);
        props.ShowAlert("Converted to Uppercase!!" , "success");
    }
    const HandleLowClick = () => {
        console.log("Lowercase was clicked" + text);
        let NewText = text.toLowerCase();
        setText(NewText);
        props.ShowAlert("Converted to Lowercase!!" , "success");
    }
    const Handleclear = () => { 
        console.log("clear was clicked" + text);
        let NewText = "";
        setText(NewText);
        props.ShowAlert("Text is Cleared!!" , "success");
    }


    const handleOnchange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        < >
            <div className={`container text-${props.mode === 'light' || props.mode === 'warning'  ? 'dark' : 'light'}`} >
                <h1>{props.heading} </h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light' ? 'white' : '#f8f1f1' , color : props.mode === 'light' ? '#f8f1f1' : 'white'}} onChange={handleOnchange} id="mybox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`}onClick={HandleUpClick}>Convert To Uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={HandleLowClick}>Convert To Lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-2`} onClick={Handleclear}>Clear Text</button>

            </div>
            <div className={`container my-4 text-${props.mode === 'light' || props.mode === 'warning' ? 'dark' : 'light'}`} >
                <h2> Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes you could take to read!!</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter Something to preview it here!!"}</p>
            </div>
        </>
    )
}
