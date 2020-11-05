import React, { useState } from "react";
import "./style.css";
import ReactCardFlip from 'react-card-flip';
import API from "../../utils/API";

// import grass from "../../utils/grass.png"
// import fight from "../../utils/fight.png"


function ResultList(props) {

  const typeCSS = {
    textAlign: "center",
    fontWeight: "bold"
  }

  //console.log(props.item)

  
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = e => {
      setIsFlipped(!isFlipped)
  }



 

  const checkTypesOfPokemon = () => {
    if (props.item.types[1] !== undefined) {
      return <p>{props.item.types[1].name}</p>
    }
  }

  // How to do this function. ASK IN TUTORING
  // const imgType = () => {
  //   const { types } = props.item;
  //   //console.log(types[0])
  //   if (types[0].name === "dragon"){
  //     console.log("it works")
  //   }
  // }

  // imgType()

return (

  <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
    <div>
      <div onClick={handleClick} value={props.item.name} className="card">
        <div className="row">
          <h2 className="col title name">{props.item.name}</h2>
        </div>
        <div className="row">
          <div className="col">
            <img className="center" alt={props.name} src={props.item.img} />
            <br>
            </br>
              <div className="name" style={ typeCSS }>
                <p>{props.item.types[0].name} </p>
                {checkTypesOfPokemon()}
              </div>
          </div>
          <div className="col">
            <br>
            </br>
            <ul>
              HP: {props.item.stats.hp}
            </ul>
            <ul>
              ATK: {props.item.stats.atk}
            </ul>
            <ul>
              DEF: {props.item.stats.def}
            </ul>
            <ul>
              SPA: {props.item.stats.spa}
            </ul>
            <ul>
              SPD: {props.item.stats.spd}
            </ul>
            <ul>
              SPE: {props.item.stats.spe}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Back of the Card */}
    <div>
    <div>
      <div onClick={handleClick} className="card">
        <div className="row">
          <h2 className="col title name">{props.item.name}</h2>
        </div>
        <div className="row">
          <div className="col">
            <br>
            </br>
            <ul>
              HP: {props.item.stats.hp}
            </ul>
            <ul>
              ATK: {props.item.stats.atk}
            </ul>
            <ul>
              DEF: {props.item.stats.def}
            </ul>
            <ul>
              SPA: {props.item.stats.spa}
            </ul>
            <ul>
              SPD: {props.item.stats.spd}
            </ul>
            <ul>
              SPE: {props.item.stats.spe}
            </ul>
          </div>
        </div>
      </div>
    </div>   
          
    </div>
  </ReactCardFlip>
);

}

export default ResultList;
