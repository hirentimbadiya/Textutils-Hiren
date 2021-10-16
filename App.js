// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const ShowAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1250);
  }

  const redmode = () => {
    setMode('danger');
    document.body.style.backgroundColor = '#310308c7';
    ShowAlert("Red Mode is Enabled!!", "success");
  }
  const greenmode = () => {
    setMode('success');
    document.body.style.backgroundColor = '#135b44';
    ShowAlert("Green Mode is Enabled!!", "success");
  }
  const yellowmode = () => {
    setMode('warning');
    document.body.style.backgroundColor = '#f2f26e9c';
    ShowAlert("Yellow Mode is Enabled!!", "success");
  }
  const toggleMode = () => {
    if (mode === 'light' || mode === 'danger' || mode === 'warning' || mode === 'success') {
      setMode('dark');
      document.body.style.backgroundColor = '#060827';
      ShowAlert("Dark Mode is Enabled!!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light Mode is Enabled!!", "success");
    }
  }
  return (
    < >
      <Router>
      <Navbar tital="TextUtils" mode={mode}  Abouttext="About" toggleMode={toggleMode} greenmode={greenmode} redmode={redmode} yellowmode={yellowmode} />
      <Alert alert={alert} />
      <div className="container  my-4">
        <Switch>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/">
            <Textform heading="Enter the Text" mode={mode} ShowAlert={ShowAlert} />
          </Route>
        </Switch>
      </div>
      </Router>

    </ >
  );
}

export default App;
