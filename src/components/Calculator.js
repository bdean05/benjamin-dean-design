import React, { useState, useEffect } from 'react'

const Calculator = (props) => {

    const [screenValue, setScreenValue] = useState("")


    const writeOnScreen = (number) => {
        // fonction qui prend en paramètre un nombre qui vient du bouton
        // et qui concatène ce nombre à la valeur de l'écran
        setScreenValue(screenValue + "" + number)
    }


    return (
        <div style={{ padding: "100px" }}>
            <div style={{ width: "300px", height: "90px", borderWidth: 3, borderColor: "black", backgroundColor: "gray", fontSize: 30 }} >{screenValue}</div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(1)}>1</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(2)}>2</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(3)}>3</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(2)}>4</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(2)}>5</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(2)}>6</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(7)}>7</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(8)}>8</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(9)}>9</button>
            </div>
            <button style={{ width: "200px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(0)}>0</button>

        </div >
    )

}

export default Calculator