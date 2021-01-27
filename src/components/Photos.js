import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Photos = () => {
    const [photos, setPhotos] = useState([])


    // une fois que le composant a fini de charger, on appelle l'api pour récupérer les données
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
            setPhotos(response.data)
        })
    }, [])
    return (

        <div>
            {photos.slice(0, 10).map((photo, index) => (
                <div key={index} >
                    <img src={photo.url} style={{ width: "100px" }} />
                    <h1>{photo.title}</h1>

                </div>
            ))}
        </div>

    )

}

export default Photos;