import React from "react";
import "./style.css";
// import grass from "../../utils/grass.png"
// import fight from "../../utils/fight.png"


function SearchResult(props) {

 

  const checkTypesOfPokemon = () => {
    if (props.kantoPokemon.types[1] !== undefined) {
      return <p>{props.kantoPokemon.types[1].name}</p>
    }
  }

  // How to do this function. ASK IN TUTORING
  // const imgType = () => {
  //   const { types } = props.kantoPokemon;
  //   //console.log(types[0])
  //   if (types[0].name === "dragon"){
  //     console.log("it works")
  //   }
  // }

  // imgType()

return (
  <div className="card">

    <div className="row">
      <h2 className="col title name">{props.kantoPokemon.name}</h2>
    </div>
    
    
    <div className="row">
      <div className="col">
        <img className="center" alt={props.name} src={props.kantoPokemon.img} />
          <div>
            <p>{props.kantoPokemon.types[0].name} </p>
            {checkTypesOfPokemon()}
          </div>

      </div>
    

      <div className="col">
        <br>
        </br>
        <ul>
          HP: {props.kantoPokemon.stats.hp}
        </ul>
        <ul>
          ATK: {props.kantoPokemon.stats.atk}
        </ul>
        <ul>
          DEF: {props.kantoPokemon.stats.def}
        </ul>
        <ul>
          SPA: {props.kantoPokemon.stats.spa}
        </ul>
        <ul>
          SPD: {props.kantoPokemon.stats.spd}
        </ul>
        <ul>
          SPE: {props.kantoPokemon.stats.spe}
        </ul>
      </div>
    </div>
    
  </div>
);

}

export default SearchResult;
