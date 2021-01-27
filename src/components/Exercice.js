import React, { useState, useEffect } from 'react'

const Exercice = (props) => {

    const [numberList, setNumberList] = useState([])


    useEffect(() => {
        // randomly generated N = 100 length array 0 <= A[N] <= 39
        setNumberList(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))

    }, [])



    const multipleSeven = (someNumber) => {
        if (someNumber % 3 == 0) {
            // On vérifie si le reste de la division de someNumber par 7 est nul (égal à 0).
            // Autrement dit, si il est divisible par 7
            alert("You won!!!! The number was " + (someNumber))
            setNumberList(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
        }
        else {
            alert("You lost!!!!")
        }
    }


    return (
        <div>

            {numberList.map((someNumber, index) => (
                <div key={index}>
                    <button onClick={() => multipleSeven(someNumber)}>Click ton find out number</button>
                </div>
            ))}



        </div>
    )
}

export default Exercice