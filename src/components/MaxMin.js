import React, { useState, useEffect } from 'react'

const MaxMin = (props) => {

    const listNumber = [7, 8, 2, 0, 9, 6, 4, 0, 7, -1789, 1, 1, 1000]

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
        let gap = biggerNumber() - smallerNumber()
        console.log(gap)
    }

    biggestGap()
    biggerNumber()
    smallerNumber()


    return (

        <div style={{ padding: "100px" }}>




        </div >
    )
}



export default MaxMin