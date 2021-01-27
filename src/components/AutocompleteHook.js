import React, { useState } from 'react'
import { allSongs } from '../songs.js';
import Songworld from './Songworld';


const AutocompleteHook = (props) => {

    const [listSongs, setListSongs] = useState([]) // dans ce state on va stocker les résultats de la recherche
    const [mySongs, setMySongs] = useState([])
    const [text, setText] = useState(null);

    const searchNewSong = (e) => {
        setText(e.target.value)
        let foundSongs = allSongs.filter(song => song.includes(e.target.value))
        setListSongs(foundSongs)
    }

    // cette fonction va recevoir en argument la chanson sur laquelle on vient de cliquer depuis le composant Autocomplete
    const addNewSong = (song) => {
        let newList = [...mySongs]
        if (!newList.includes(song)) {
            newList.push(song)
            setMySongs(newList)
        }
    }

    const removeSong = (index) => {
        let newList = [...mySongs]
        newList.splice(index, 1)
        setMySongs(newList)
    }


    return (
        <div className="search">
            <input
                type="text"
                className="search-box"
                onChange={searchNewSong}
                value={text}
            />
            {listSongs.map((songy, index) => (
                <div key={index} className="" onClick={() => addNewSong(songy)}>{songy}</div>
            ))}

            <Songworld mySongs={mySongs} removeSong={removeSong} />
        </div>
    )
}

export default AutocompleteHook