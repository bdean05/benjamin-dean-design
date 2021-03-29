import { queryByPlaceholderText } from '@testing-library/dom'
import React, { useState, useEffect } from 'react'

let counter = 0

const Circle = (props) => {

    const [height, setHeight] = useState(100)
    const [hauteur, setHauteur] = useState(100)


    function doubleHeight() {
        let h = height * 2
        setHeight(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    function reduceHeight() {
        let h = height / 2
        setHeight(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    function reduceHauteur() {
        let h = hauteur / 2
        setHauteur(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    function doubleHauteur() {
        let h = hauteur / 2
        setHauteur(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    function actionClick() {
        counter = counter + 1  // incrémantation (l'inverse de décrémantation)
        if (counter % 3 === 0) {
            reduceHeight()
        }
        else { doubleHeight() }
    }

    function actionInverse() {
        counter = counter + 1  // incrémantation (l'inverse de décrémantation)
        if (counter % 2 === 0) {
            doubleHauteur()
        }
        else { reduceHauteur() }
    }


    function handleKeyPress(e) {
        if (e.target.value.includes('@')) {
            alert('Attention, mauvaise touche, pas de "@" svp !!!')
        }

    }



    return (
        <div>
            <div style={{ height: height, width: height, backgroundColor: "red", borderRadius: height / 2 }} onClick={actionClick}>
            </div>
            <div style={{ height: hauteur, width: hauteur, backgroundColor: "green", borderRadius: hauteur / 2 }} onClick={actionInverse}>
            </div>

            <input onChange={handleKeyPress} />
        </div>

    )
}

export default Circle