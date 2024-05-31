import "./App.css";
import React,{useState} from "react";


function App() {
 //making state of our application
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setmessage] = useState('');

  //logic
 let calcbmi=(e)=>{
  e.preventDefault();
  if(weight===0 || height===0)
    {
      alert('Please enter a vlaid weigth and height')
    }

    else{
      let bmi=(weight/(height*height)*703);
      setbmi (bmi.toFixed(1))

    //
    if(bmi<25){
      setmessage('You are underweight')
    }

    else if (bmi>=25 && bmi<30){
      setmessage('You are healthy weight')
    }
    else{
      setmessage('You are overweight')
    }
    }
 }

  let reload=()=>{
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e)=> setweight(e.target.value)}
            />
          </div>
          <div>
            <label>height(in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e)=> setheight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
