import React from "react";
import { useState, useEffect } from "react";

function Cell(props){

    const [data, setData] = useState("");

    useEffect(() => {
        if(props.pA.includes(props.value)){
            setData("X")
        }
        if(props.pB.includes(props.value)){
            setData("O");
        }
    },[props.pA, props.pB]);

    function handleClick(){
        props.returnValue(props.value);
    }

    return(
        <td onClick={handleClick}>
            {data}
        </td>
    )
}

export default Cell;