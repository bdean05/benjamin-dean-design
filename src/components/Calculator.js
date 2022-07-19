import React, { useState, useEffect } from 'react'
import './style.css'
import photoDesk from '../assets/photo-desk-743437.jpg'

const Calculator = (props) => {

    const [screenValue, setScreenValue] = useState("")  // State qui affiche initial
    const [screenValue2, setScreenValue2] = useState("")  // State qui affiche autre élément
    const [operationValue, setOperationValue] = useState(null) // State qui effectue l'opération



    const writeOnScreen = (number) => {
        // fonction qui prend en paramètre un nombre qui vient du bouton
        // et qui concatène ce nombre à la valeur de l'écran

        // si on a pas cliqué sur une operation, on remplit le premier nombre
        if (operationValue == null) {
            setScreenValue(screenValue + number) // valeur initiale + nombre tapé
        } else {
            setScreenValue2(screenValue2 + number) // valeur initiale + nombre tapé
        }
    }

    // fonction qui stock le type d'opération à effectuer ultérieurement dans la fonction doOperation
    const operationOnScreen = (operation) => {
        setOperationValue(operation)

    }

    // fonction des types d'opérations
    const doOperation = () => {
        // initialement screenValue et screenValue2 sont des strings
        // pour effectuer une opération arithmétique, on doit avoir des nombres
        // on convertit donc ces chaines de caractères en nombre avec la fonction native Number de JS
        let s1 = Number(screenValue) // Déclaration de l'élément en type nombre (élément initial)
        let s2 = Number(screenValue2) // Déclaration de l'élément en type nombre (autre élément ajouté)

        if (operationValue === "division") {
            setScreenValue(s1 / s2)
        } else if (operationValue === "multiplication") {
            setScreenValue(s1 * s2)
        } else if (operationValue === "soustraction") {
            setScreenValue(s1 - s2)
        } else if (operationValue === "addition") {
            setScreenValue(s1 + s2)
        } else if (operationValue === "pourcentage") {
            setScreenValue((s1 * s2) / 100)
        }

        setScreenValue2("")
        setOperationValue(null) // null termine l'opération

    }

    // fonction pour vider le display
    const emptyDisplay = () => {
        setScreenValue("")
        setScreenValue2("")
        setOperationValue(null)
    }


    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${photoDesk})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', padding: "35px" }}>

            <div style={{ border: '2px solid #cccccc', background: 'linear-gradient(-45deg, rgba(245,245,245,100) 0%, rgba(214,214,214,100) 45%, rgba(240,240,240,100) 100%)', width: '300px', padding: '30px', margin: '35px', boxShadow: '10px 14px 0px #bababa', }}>
                <div><a href='Javareact' className='menu-links'>← back</a></div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                    <div style={{ boxShadow: 'inset 3px 4px 0px #C5C5C5', padding: '10px', width: "220px", height: "60px", borderWidth: 3, borderColor: "black", backgroundColor: "#FFFFFF", fontSize: 30, fontFamily: 'Arial, Helvetica, sans-serif', textAlign: 'right' }} >
                        {(operationValue == null || screenValue2 === "" || screenValue2 == 0) ? screenValue : screenValue2}
                    </div>
                </div>

                {/* Si operationValue est null, screenValue s'affiche, sinon c'est screeValue2 */}
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <button className="calculator-button" onClick={() => writeOnScreen(1)}>1</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(2)}>2</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(3)}>3</button>
                    <button className="calculator-button" onClick={() => operationOnScreen("division")}>:</button>
                </div>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <button className="calculator-button" onClick={() => writeOnScreen(4)}>4</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(5)}>5</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(6)}>6</button>
                    <button className="calculator-button" onClick={() => operationOnScreen("multiplication")}>x</button>
                </div>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <button className="calculator-button" onClick={() => writeOnScreen(7)}>7</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(8)}>8</button>
                    <button className="calculator-button" onClick={() => writeOnScreen(9)}>9</button>
                    <button className="calculator-button" onClick={() => operationOnScreen("soustraction")}>-</button>
                </div>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <button className="calculator-button" onClick={() => writeOnScreen(0)}>0</button>
                    <button className="calculator-button" onClick={doOperation}>=</button>
                    <button className="calculator-button" onClick={emptyDisplay}>C</button>
                    <button className="calculator-button" onClick={() => operationOnScreen("addition")}>+</button>
                </div>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <button className="calculator-button" onClick={() => operationOnScreen("pourcentage")}>%</button>
                    <div style={{ backgroundColor: "#d2d2d2", boxShadow: 'inset 3px 4px 0px #C5C5C5', width: '40px', height: '40px', margin: '10px' }}></div>
                    <div style={{ backgroundColor: "#d2d2d2", boxShadow: 'inset 3px 4px 0px #C5C5C5', width: '40px', height: '40px', margin: '10px' }}></div>
                    <div style={{ backgroundColor: "#d2d2d2", boxShadow: 'inset 3px 4px 0px #C5C5C5', width: '40px', height: '40px', margin: '10px' }}></div>
                </div>
            </div >
        </div >


    )

}

export default Calculator