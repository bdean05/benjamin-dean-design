import React, { useState, useEffect } from 'react'

const Calculator = (props) => {

    const [screenValue, setScreenValue] = useState("")  // State qui affiche initial
    const [screenValue2, setScreenValue2] = useState("")  // State qui affiche autre élément
    const [operationValue, setOperationValue] = useState(null) // State qui effectue l'opération

    const [test, setTest] = useState(0)

    var test2 = 0

    useEffect(() => {
        setTimeout(() => {
            setTest(10)
            test2 = 10
        }, 5000);
    }, [])


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
        <div style={{ padding: "100px" }}>
            <h1>test {test}</h1>
            <h1>test2 {test2}</h1>
            <div style={{ width: "300px", height: "90px", borderWidth: 3, borderColor: "black", backgroundColor: "gray", fontSize: 30 }} >
                {(operationValue == null || screenValue2 === "" || screenValue2 == 0) ? screenValue : screenValue2}

            </div>
            {/* Si operationValue est null, screenValue s'affiche, sinon c'est screeValue2 */}
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(1)}>1</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(2)}>2</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(3)}>3</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => operationOnScreen("division")}>:</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(4)}>4</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(5)}>5</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(6)}>6</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => operationOnScreen("multiplication")}>x</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(7)}>7</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(8)}>8</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(9)}>9</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => operationOnScreen("soustraction")}>-</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => writeOnScreen(0)}>0</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={doOperation}>=</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={emptyDisplay}>C</button>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => operationOnScreen("addition")}>+</button>
            </div>
            <div style={{ display: "flex" }}>
                <button style={{ width: "40px", height: "40px", margin: 10 }} onClick={() => operationOnScreen("pourcentage")}>%</button>
            </div>

        </div >
    )

}

export default Calculator