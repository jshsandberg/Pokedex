import React from "react";


function ResultList(props) {

  const checkTypesOfPokemon = () => {
    if (props.item.types[1] != undefined) {
      return <p>{props.item.types[1].name}</p>
    }
  }

return (
  <div className="card">

    <div className="img-container">
      <img alt={props.name} src={props.item.img} />
    </div>
    <div className="content">
      <ul>
        <p>
          {props.item.name}
        </p>
        <p>
          {props.item.types[0].name} 
          {checkTypesOfPokemon()}
        </p>
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
      </ul>
    </div>
  </div>
);

}

export default ResultList;
