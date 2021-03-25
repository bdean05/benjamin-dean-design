import React, { useState, useEffect } from 'react'

const Circle = (props) => {

    const [height, setHeight] = useState(100)
    const [hauteur, setHauteur] = useState(100)

    function doubleHeight() {
        let h = height * 2
        setHeight(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    function reduceHeight() {
        let h = hauteur / 2
        setHauteur(h)  // le "setMachin est une MISE À JOUR !!!"
    }

    return (
        <div>
            <div style={{ height: height, width: height, backgroundColor: "red", borderRadius: height / 2 }} onClick={doubleHeight}>
            </div>
            <div style={{ height: hauteur, width: hauteur, backgroundColor: "green", borderRadius: hauteur / 2 }} onClick={reduceHeight}>
            </div>
        </div>

    )
}

export default Circle