import React, { useState, useEffect } from 'react'

const Exercice = (props) => {

    const [numberList, setNumberList] = useState([])
    const [searchText, setSearchText] = useState([])


    useEffect(() => {
        // randomly generated N = 100 length array 0 <= A[N] <= 39
        setNumberList(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
    }, [])

    const multipleSeven = (someNumber) => {
        if (someNumber % 7 == 0) {
            // On vérifie si le reste de la division de someNumber par 7 est nul (égal à 0).
            // Autrement dit, si il est divisible par 7
            alert("You won!!!! The number was " + (someNumber))
            setNumberList(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
        }
        else {
            alert("You lost!!!!")
        }
    }

    const findElement = () => {
        for (let i = 0; i < numberList.length; i++) {
            // on parcourt la liste numberList
            // à chaque itération on vérifie la présence de searchText à l'itération i
            // si on trouve on s'arrête
            if (searchText == numberList[i]) {
                alert("Your number is in the list")
                return // on s'arrête
            }
        }
        alert("Your number is not on the list")
    }

    const findAseven = () => {
        let compteur = 0
        for (let i = 0; i < numberList.length; i++) {
            if (numberList[i] % 7 == 0) {
                compteur++
            }
        }
        alert(compteur)
    }

    return (
        <div>
            <div style={{ padding: "100px" }}>
                <input value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Find a number" />
                <button onClick={() => findElement()}>Verify</button>
                <button onClick={() => findAseven()}>Find out if it's a seven multiple</button>
            </div>
            {
                numberList.map((someNumber, index) => (
                    <div key={index}>
                        <button onClick={() => multipleSeven(someNumber)}>Click ton find out number</button>
                    </div>
                ))
            }
        </div >
    )
}

export default Exercice
