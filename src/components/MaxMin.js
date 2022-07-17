import React, { useState, useEffect } from 'react'

const MaxMin = (props) => {
    const [gap, setGap] = useState(0)
    const [number, setNumber] = useState(null)
    const [listNumber, setListNumber] = useState([])

    function biggerNumber() {
        let max = listNumber[0] // on cree une variable qui prends la valeur du premier élément de la liste
        for (let i = 0; i < listNumber.length; i++) {  // on parcourt la liste pour comparer les nombres afin d'en tirer le nombre le plus grand
            if (max < listNumber[i]) {  // si on trouve un nombre qui est plus grand que max
                max = listNumber[i]     // on affecte ce nombre trouvé à max
            }
        }
        return max
    }

    function smallerNumber() {
        let min = listNumber[0] // on cree une variable qui prends la valeur du premier élément de la liste
        for (let i = 0; i < listNumber.length; i++) {  // on parcourt la liste pour comparer les nombres afin d'en tirer le nombre le plus petit
            if (min > listNumber[i]) {  // si on trouve un nombre qui est plus petit que min
                min = listNumber[i]     // on affecte ce nombre trouvé à min
            }
        }
        return min
    }

    function biggestGap() {
        let g = biggerNumber() - smallerNumber()
        setGap(g)
        console.log("Hello world!")
    }



    function insertNumber() {
        setListNumber([...listNumber, number])
    }




    return (

        <div style={{ padding: "100px" }}>
            Voici les nombres proposés:
            {listNumber.join(',')}
            <input type="text" onChange={e => setNumber(e.target.value)} />
            <button onClick={insertNumber}>Insérer le nombre</button>
            <h1>{gap}</h1>
            <button onClick={biggestGap}>Calculer l'écart</button>

        </div >
    )
}



export default MaxMin