import React, { useState, useEffect } from 'react'
let myInterval; // variable globale dans tout le fichier

const Timer = (props) => {

    // Un champ de texte (state) à partir de 0

    const [myTimer, setMyTimer] = useState(0) // en secondes
    const [count, setCount] = useState(0)
    const [counterInProgress, setCounterInProgress] = useState(false)

    const launchTimer = () => {
        // on veut lancer un compte à rebours qui commence à partir de la valeur de myTimer
        let toto = myTimer
        setCounterInProgress(true)
        myInterval = setInterval(() => {
            toto = toto - 1
            setCount(toto)
            if (toto == 0) {
                clearInterval(myInterval)
                setCounterInProgress(false)
            }
        }, 1000);
    }

    const clearAndReset = () => {
        clearInterval(myInterval)
        setCounterInProgress(false)
    }

    return (
        <div style={{ padding: "100px" }}>
            <h1>{count}</h1>
            <input value={myTimer} onChange={e => setMyTimer(e.target.value)} placeholder="Seconds" />
            <button onClick={() => launchTimer()} disabled={counterInProgress}>Launch</button>
            <button onClick={() => clearAndReset()} disabled={!counterInProgress}>Clear and reset</button>
        </div >
    )

}

export default Timer