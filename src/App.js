import { useState } from 'react';
import React from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode]= useState(`light`);
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils- Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils- HomePage"
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
        {/* <Router> */}
        <Navbar title="TextUtils" aboutText="AboutUs" mode ={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-2">
        {/* <Routes> */}
          {/* /users --> component 1
          /users/home --> component 2
          /react partial matching karta h agar exact use nahi kiya to kabhi kabhi vah galat commponent bhi render kar sakta h. */}
              {/* <Route exact path="/about" element={<About/>}> */}
                {/* <About />  */}
              {/* </Route> */}
              {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode ={mode} />}> */}
                <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode ={mode} />
              {/* </Route> */}
            {/* </Routes> */}
        </div>
        {/* </Router> */}
      </>
  );
}

export default App;
