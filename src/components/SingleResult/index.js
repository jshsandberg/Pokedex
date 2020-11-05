import React from "react";
import "./style.css";
import API from "../../utils/API";


// import grass from "../../utils/grass.png"
// import fight from "../../utils/fight.png"


function SingleResult(props) {

    const searchOnePokemon = query => {
        API.search(query)
          .then(res => console.log({ result: res.data }))
          .catch(err => console.log(err));
      };
    
    
    searchOnePokemon(props.kantoPokemon.name)

 console.log(props.kantoPokemon.name)

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
        <br>
        </br>
          <div className="name">
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

export default SingleResult;
