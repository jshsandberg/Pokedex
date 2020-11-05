import React from "react";
import Bar from 'react-meter-bar';

function Meter() {


return (
    <div>
       <Bar
        labels={[0,10,20,30,40,50,60,70,80,90,100]}
        labelColor="steelblue"
        progress={80}
        barColor="#fff34b"
        seperatorColor="hotpink"
        /> 
    </div>
)

};

export default Meter