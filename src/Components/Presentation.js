import { useEffect, useState} from 'react';
import './Axis.css';

const Axis = (props) => {

  useEffect(()=>{
      var circle = document.querySelector('.circleMain');
      circle.style.top = props.y+"%";
      circle.style.left = props.x+"%";
  }, [props.x, props.y]);

  return (
    <div className = "container">
    <div className="stage">
        <div className="circle circleMain">
        </div>
    </div>
    </div>
  );
}

export default Axis;
