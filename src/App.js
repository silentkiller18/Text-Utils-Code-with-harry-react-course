
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React , {useState} from 'react' ;
function App() {
  const[Mode,setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
    <>
    
    <Navbar title="TextUtils" Mode={Mode} toggleMode = {toggleMode} />
    <div className="container" my-3="true" > 

    <TextForm heading="Enter the text to analyze below" mode={Mode}/>
    
    {/* <About/> */}
    </div>
   
    </>
       );
}

export default App;
