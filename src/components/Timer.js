import React, { useState, useEffect } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import bhd_01 from '../assets/bhd_01.jpg'
import bhd_02 from '../assets/bhd_02.jpg'
import bhd_03 from '../assets/bhd_03.jpg'
import bhd_04 from '../assets/bhd_04.jpg'
import bhd_05 from '../assets/bhd_05.jpg'
import bhd_06 from '../assets/bhd_06.jpg'
import bhd_07 from '../assets/bhd_07.jpg'
import bhd_08 from '../assets/bhd_08.jpg'
import bhd_09 from '../assets/bhd_09.jpg'
import bhd_10 from '../assets/bhd_10.jpg'
import bhd_11 from '../assets/bhd_11.jpg'
import bhd_12 from '../assets/bhd_12.jpg'
import bhd_13 from '../assets/bhd_13.jpg'
import bhd_14 from '../assets/bhd_14.jpg'
import bhd_15 from '../assets/bhd_15.jpg'
import bhd_16 from '../assets/bhd_16.jpg'
import bhd_17 from '../assets/bhd_17.jpg'
import bhd_18 from '../assets/bhd_18.jpg'


let myInterval; // variable globale dans tout le fichier


const Timer = (props) => {

    // Un champ de texte (state) à partir de 0



    const [myTimer, setMyTimer] = useState(0) // en secondes
    const [count, setCount] = useState(0)
    const [counterInProgress, setCounterInProgress] = useState(false)
    const [imagesInProgress, setImagesInProgress] = useState(false)

    const launchTimer = () => {
        // on veut lancer un compte à rebours qui commence à partir de la valeur de myTimer
        let toto = myTimer
        setCounterInProgress(true)
        setImagesInProgress(true)
        myInterval = setInterval(() => {
            toto = toto - 1
            setCount(toto)
            if (toto == 0) {
                clearInterval(myInterval)
                setCounterInProgress(false)
                setImagesInProgress(false)
            }
        }, 1000);

    }

    const clearAndReset = () => {
        clearInterval(myInterval)
        setCounterInProgress(false)
        setImagesInProgress(false)
    }

    let percent = parseInt(((count / myTimer) * 100))

    const myPortfolio = [
        '../assets/bhd_01.jpg',
        '../assets/bhd_02.jpg',
        '../assets/bhd_03.jpg',
        '../assets/bhd_04.jpg',
        '../assets/bhd_05.jpg',
        '../assets/bhd_06.jpg',
        '../assets/bhd_07.jpg',
        '../assets/bhd_08.jpg',
        '../assets/bhd_09.jpg',
        '../assets/bhd_10.jpg',
        '../assets/bhd_11.jpg',
        '../assets/bhd_12.jpg',
        '../assets/bhd_13.jpg',
        '../assets/bhd_14.jpg',
        '../assets/bhd_15.jpg',
        '../assets/bhd_16.jpg',
        '../assets/bhd_17.jpg',
        '../assets/bhd_18.jpg',
    ];

    const items = []

    for (const [index, value] of myPortfolio.entries()) {
        items.push(<li key={index}>{value}</li>)
    }

    return (

        <div style={{ padding: "100px" }}>
            <ProgressBar completed={percent} />
            <h1>{count}</h1>
            <input value={myTimer} onChange={e => setMyTimer(e.target.value)} placeholder="Seconds" />
            <button onClick={() => launchTimer()} disabled={counterInProgress}>Launch</button>
            <button onClick={() => clearAndReset()} disabled={!counterInProgress}>Clear and reset</button>

            <ul>
                <li><img src={myPortfolio} height="50%" width="50%" /></li>
            </ul>

        </div >
    )

}

export default Timer