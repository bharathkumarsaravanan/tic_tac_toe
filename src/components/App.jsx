import React from "react";
import { useState, useEffect } from "react";
import Cell from "./cell";

function App(){

    const [cells, setCells] = useState([[1,2,3] , [4,5,6] , [7,8,9]]);
    const [players, setPlayers] = useState(true);
    const [pA, setPA] = useState([]);
    const [pB, setPB] = useState([]);

    useEffect(() => {
        if (pA.includes(1)&&pA.includes(2)&&pA.includes(3)) {
            alert("Player A won")
            window.location.reload();

        } else if (pA.includes(4)&&pA.includes(5)&&pA.includes(6)) {
            alert("Player A won")
            window.location.reload();

        } else if (pA.includes(7)&&pA.includes(8)&&pA.includes(9)) {
            alert("Player A won")
            window.location.reload();
      
        } else if (pA.includes(1)&&pA.includes(4)&&pA.includes(7)) {
            alert("Player A won")
            window.location.reload();
      
        } else if (pA.includes(2)&&pA.includes(5)&&pA.includes(8)) {
            alert("Player A won")
            window.location.reload();
      
        } else if (pA.includes(3)&&pA.includes(6)&&pA.includes(9)) {
            alert("Player A won")
            window.location.reload();

        } else {
            if (pB.includes(1)&&pB.includes(2)&&pB.includes(3)) {
                alert("Player B won")
                window.location.reload();

            } else if (pB.includes(4)&&pB.includes(5)&&pB.includes(6)) {
                alert("Player B won")
                window.location.reload();
    
            } else if (pB.includes(7)&&pB.includes(8)&&pB.includes(9)) {
                alert("Player B won")
                window.location.reload();
    
            } else if (pB.includes(1)&&pB.includes(4)&&pB.includes(7)) {
                alert("Player B won")
                window.location.reload();
    
            } else if (pB.includes(2)&&pB.includes(5)&&pB.includes(8)) {
                alert("Player B won")
                window.location.reload();
    
            } else if (pB.includes(3)&&pB.includes(6)&&pB.includes(9)) {
                alert("Player B won")
                window.location.reload();
    
            } else {
                if(pA.length + pB.length == 9){
                    alert("Draw")
                    window.location.reload();
                }


            }
        }
    },[pA, pB])

    function returnValue(clickedItem){
        if (players) {
            setPA(prev => [...prev, clickedItem]);
            setPlayers(prev => !prev)
        } else {
            setPB(prev => [...prev, clickedItem]);
            setPlayers(prev => !prev)
        }
    }

    return(
        <div>
            <h1>{players?"Player A":"Player B"}</h1>
            <table>
                <tbody>
                    {cells.map(rows => {
                        return (
                            <tr>
                                {rows.map(cols => {
                                    return <Cell 
                                                value={cols} 
                                                returnValue={returnValue}
                                                pA={pA}
                                                pB={pB}
                                                />
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default App;