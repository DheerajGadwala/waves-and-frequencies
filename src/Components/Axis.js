import { useEffect, useState} from 'react';
import './Axis.css';

const Axis = (props) => {

  const [speed, setSpeed] = useState(null);
  const [speedInter, setSpeedInter] = useState(null);

  useEffect(() => {
    clearInterval(speedInter);
    var circle = document.querySelector('.circle'+props.id);
    var angle = 0;
    var radius = 35; // percentage
    if (speed !== null) {
      var interval = setInterval(() => {
        angle = (angle + speed) % 360;
        var y = radius * Math.sin(angle / 180 * Math.PI);
        var x = radius * Math.cos(angle / 180 * Math.PI);
        circle.style.left = x + "%";
        circle.style.top = y + "%";
        props.setX(x);
        props.setY(y);
      }, 2);
      setSpeedInter(interval);
    }
  }, [speed, props.reset]);

  return (
    <div className = "container">
      <span className = "axisTitle">{props.id}-axis frequency</span>
      <input type = "range" className="speedController" min="0" max="5" step="0.05" value="0" onChange={(e)=>{
          setSpeed(parseFloat(e.target.value));
          props.setReset(!props.reset);
      }}/>
      <div className="stage">
          <div className={"circle " + "circle" + props.id}>
          </div>
      </div>
    </div>
  );
}

export default Axis;
