import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Gallery = (props) => {

    const [listPhotos, setListPhotos] = useState([])
    const [text, setText] = useState(null);

    const searchNewPhoto = (e) => {
        setText(e.target.value)
        let foundPhotos = listPhotos.filter(photo => photo.title.includes(e.target.value))
        setListPhotos(foundPhotos)
    }

    // lorsque le composant a terminé le chargement (le render)
    // useEffect lance via axios la reqêute pour récupérer les photos depuis l'API jsonplaceholder
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            setListPhotos(res.data.slice(0, 20))
        })
    }, [])


    return (
        <div>
            <input
                type="text"
                className="search-box"
                onChange={searchNewPhoto}
                value={text}
            />
            {listPhotos.map((photo, index) => (
                <div>
                    <img key={index} src={photo.url} />
                    <h4>{photo.title}</h4>
                </div>
            ))}


        </div>
    )
}


export default Gallery