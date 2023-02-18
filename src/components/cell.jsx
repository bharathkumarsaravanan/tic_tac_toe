import React from "react";

function Cell(props){

    function handleClick(){
        props.returnValue(props.value);
    }

    return(
        <td onClick={handleClick}>
            {props.data}
        </td>
    )
}

export default Cell;