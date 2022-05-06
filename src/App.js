import Axis from './Components/Axis'
import Presentation from './Components/Presentation'
import {useState} from 'react';
import './App.css';

const App = () => {

  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y1, setY1] = useState(0);
  const [y2, setY2] = useState(0);
  const [reset, setReset] = useState(false);

  return (
    <div className="screen">
      <span className="title">
        <span>
          Waves and Frequencies by <a href="https://www.dheerajgadwala.tech/">Dheeraj Gadwala</a>
        </span>
      </span>
      <div className="row1">
      <span className = "empty">
      </span>
      <Axis id="y" setX={setX2} setY={setY2} setReset = {setReset} reset = {reset}/>
      </div>
      <div className="row2">
        <Axis id="x" setX={setX1} setY={setY1} setReset = {setReset} reset = {reset}/>
        <Presentation x = {x1} y = {y2}/>
      </div>
    </div>
  );
}

export default App;
