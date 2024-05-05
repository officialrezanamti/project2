import { useState } from "react";
import "./Button.css";

export default function Button() {

  let [number , setNumber] = useState('0');



  let clickHnadler = (e) => {

    let input = e.target.innerText;
    setNumber(number = input)
    
    

  }

  let equalBtn = () =>{

  }

  let backSpace = () =>{

  }
  let clearBtn = () =>{

  }
 
  return (
    <>
      <div className="screen">
        <h1>{number}</h1>
      </div>
      <div className="buttons">
        <div className="first">
          <button onClick={clearBtn} className="clear">
            Clear
          </button>
          <button onClick={backSpace} className="c">
            C
          </button>
          <button onClick={clickHnadler} className="divide">
            %
          </button>
        </div>
        <div className="second">
          <button onClick={clickHnadler} className="seven">
            7
          </button>
          <button onClick={clickHnadler} className="eight">
            8
          </button>
          <button onClick={clickHnadler} className="nine">
            9
          </button>
          <button onClick={clickHnadler} className="multiple">
            ×
          </button>
        </div>
        <div className="third">
          <button onClick={clickHnadler} className="for">
            4
          </button>
          <button onClick={clickHnadler} className="five">
            5
          </button>
          <button onClick={clickHnadler} className="6">
            6
          </button>
          <button onClick={clickHnadler} className="subtraction">
            -
          </button>
        </div>
        <div className="forth">
          <button onClick={clickHnadler} className="one">
            1
          </button>
          <button onClick={clickHnadler} className="two">
            2
          </button>
          <button onClick={clickHnadler} className="three">
            3
          </button>
          <button onClick={clickHnadler} className="sum">
            +
          </button>
        </div>
        <div className="fifth">
          <button onClick={clickHnadler} className="ziro">
            0
          </button>
          <button onClick={clickHnadler} className="point">
            .
          </button>
          <button onClick={equalBtn} className="equal">
            =
          </button>
        </div>
      </div>
    </>
  );
}
