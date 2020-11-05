import React from "react";


import "./style.css"

function ReturnAll(props) {


    

    return (
    <div>
        <button className="btn btn-primary" onClick={props.returnAll}>Return</button>

     
    
</div>
    );
}

export default ReturnAll;