import React from "react";


function ResultList(props) {

  //console.log(props.item.types)

  



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
          {props.types} 
        </p>
        <p>
          {props.stats}
        </p>
      </ul>
    </div>
  </div>
);

}

export default ResultList;
