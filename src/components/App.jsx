import React from "react";
import { useState, useEffect } from "react";
import Cell from "./cell";

function App(){

    const [cells, setCells] = useState([[1,2,3] , [4,5,6] , [7,8,9]]);
    const [players, setPlayers] = useState(true);
    const [pA, setPA] = useState([]);
    const [pB, setPB] = useState([]);

    useEffect(() => {

        if(!players){
            for (var i = 0; i < 3; i++){
                for (var j = 0; j < 3; j++){

                    var lastItem = pB[pB.length-1];
                    var item = cells[i][j];
                    
                    if (pB.length == 0) {
                        if(!pA.includes(item)) {
                            setPB([item]);
                            setPlayers(true);
                            i = j = 4;
                        }

                    } else {
                        var lastItem = pB[pB.length-1];
                        if (lastItem==6 || lastItem==3 ) {
                            if (!pA.includes(lastItem+3) && !pB.includes(lastItem+3)) {
                                setPB(prev => [...prev, (lastItem+3)]);
                                setPlayers(true);
                                i = j = 4;
                            } else {
                                if (!pA.includes(item) && !pB.includes(item)){
                                    setPB(prev => [...prev, item]);
                                    setPlayers(true);
                                    i = j = 4;
                                }
                            }
                        } else {
                            if(lastItem == 9){
                                if (!pA.includes(lastItem - 1 ) && !pB.includes(lastItem - 1 )) {
                                    setPB(prev => [...prev, (lastItem-1)]);
                                    setPlayers(true);
                                    i = j = 4;
                                } else if (!pA.includes(lastItem - 3 ) && !pB.includes(lastItem - 3 )) {
                                    setPB(prev => [...prev, (lastItem-3)]);
                                    setPlayers(true);
                                    i = j = 4; 
                                } else {
                                    if (!pA.includes(item) && !pB.includes(item)){
                                        setPB(prev => [...prev, (lastItem+3)]);
                                        setPlayers(true);
                                        i = j = 4;
                                    }
                                }
                            } else {
                                var right = lastItem+1;
                                var left  = lastItem-1;
                                var top   = lastItem-3;
                                var down  = lastItem+3
                                if (!pA.includes(right) && !pB.includes(right)) {
                                    setPB(prev => [...prev, right]);
                                    setPlayers(true);
                                    i = j = 4;
                                } else if (!pA.includes(down) && !pB.includes(down)) {
                                    setPB(prev => [...prev, down]);
                                    setPlayers(true);
                                    i = j = 4;
                                } else if (!pA.includes(left) && !pB.includes(left) && lastItem != 1 && lastItem != 2) {
                                    setPB(prev => [...prev, left]);
                                    setPlayers(true);
                                    i = j = 4;   
                                } else if (!pA.includes(top) && !pB.includes(top) && lastItem != 1 && lastItem != 2) {
                                    setPB(prev => [...prev, top]);
                                    setPlayers(true);
                                    i = j = 4;    
                                } else {
                                    if (!pA.includes(cells[i][j]) && !pB.includes(cells[i][j])){
                                        setPB(prev => [...prev, item]);
                                        setPlayers(true);
                                        i = j = 4;
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }

    },[players])

    useEffect(() => {
        if (pA.includes(1)&&pA.includes(2)&&pA.includes(3)) {
            alert("Player A won")
            setPA([]);
            setPB([]);

        } else if (pA.includes(4)&&pA.includes(5)&&pA.includes(6)) {
            alert("Player A won")
            setPA([]);
            setPB([]);

        } else if (pA.includes(7)&&pA.includes(8)&&pA.includes(9)) {
            alert("Player A won")
            setPA([]);
            setPB([]);
      
        } else if (pA.includes(1)&&pA.includes(4)&&pA.includes(7)) {
            alert("Player A won")
            setPA([]);
            setPB([]);
      
        } else if (pA.includes(2)&&pA.includes(5)&&pA.includes(8)) {
            alert("Player A won")
            setPA([]);
            setPB([]);
      
        } else if (pA.includes(3)&&pA.includes(6)&&pA.includes(9)) {
            alert("Player A won")
            setPA([]);
            setPB([]);

        } else {
            if (pB.includes(1)&&pB.includes(2)&&pB.includes(3)) {
                alert("Player B won")
                setPA([]);
                setPB([]);

            } else if (pB.includes(4)&&pB.includes(5)&&pB.includes(6)) {
                alert("Player B won")
                setPA([]);
                setPB([]);
    
            } else if (pB.includes(7)&&pB.includes(8)&&pB.includes(9)) {
                alert("Player B won")
                setPA([]);
                setPB([]);
    
            } else if (pB.includes(1)&&pB.includes(4)&&pB.includes(7)) {
                alert("Player B won")
                setPA([]);
                setPB([]);
    
            } else if (pB.includes(2)&&pB.includes(5)&&pB.includes(8)) {
                alert("Player B won")
                setPA([]);
                setPB([]);
    
            } else if (pB.includes(3)&&pB.includes(6)&&pB.includes(9)) {
                alert("Player B won")
                setPA([]);
                setPB([]);
    
            } else {
                if(pA.length + pB.length == 9){
                    alert("Draw")
                    setPA([]);
                    setPB([]);
                }


            }
        }
    },[players]);

    function restart(){
        window.location.reload();
        setPA([]);
        setPB([]);
    }

    function returnValue(clickedItem){
        if (pA.includes(clickedItem) || pB.includes(clickedItem)){
            alert("This cell already accupied")
        } else {
            if (players) {
                setPA(prev => [...prev, clickedItem]);
                setPlayers(prev => !prev)
            } else {
                setPB(prev => [...prev, clickedItem]);
                setPlayers(prev => !prev)
            }
        }

    }

    return(
        <div>
            <h1>Tic Tac Toe</h1>
            <table>
                <tbody>
                    {cells.map((rows, rowIndex) => {

                        return (
                            <tr key={rowIndex}>
                                {rows.map((cols, colsIndex) => {

                                    return <Cell 
                                                key={colsIndex}
                                                value={cols} 
                                                returnValue={returnValue}
                                                data = {pA.includes(cols)?"X":pB.includes(cols)?"O":""}
                                                />
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default App;