import React from "react";


function ResultList(props) {
// console.log(props.stats)
const statName = [
  {
    name: "HP", 
    stat: props.stats[0]
  },
  {
    name: "Atk", 
    stat: props.stats[1]
  },
  {
    name: "Def", 
    stat: props.stats[2]
  },
  {
    name: "Sp.Atk", 
    stat: props.stats[3]
  },
  {
    name: "Sp.Def", 
    stat: props.stats[4]
  },
  {
  name: "Spd", 
    stat: props.stats[5]
  }
  ]

   //console.log(statName)
return (

  <div className="container">
    
      <div className="card" style={{width: "18rem"}}>
        <div className="col">
          <img src={props.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title col">{props.name}</h5>
              {
                statName.map(item => (
                 <li key={item.name}>
                   {item.name}: {item.stat}
                 </li> 
                ))
              }
              <button onClick={props.addToParty} className="btn btn-primary">Add to Party</button>
          </div>
      </div>
      </div>
    </div>
  ) 

}

export default ResultList;
