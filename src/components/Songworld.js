import React, { useState } from 'react'
import './style.css'

const SongComponent = (props) => {


    const displaySongs = (theSongs) => {
        alert(theSongs)
    }

    return (
        <div>
            <h1>My songs</h1>

            {props.mySongs.map((song, index) => (
                <>
                    <div style={{ width: "100px" }} key={"song" + index} onClick={() => props.removeSong(index)}>
                        {song}
                    </div>
                    <button onClick={() => displaySongs(song)}>Afficher</button>
                </>
            ))
            }

            {/* - Create an input field. When you will type something inside this field, you will display under it an
   autocompleted list of songs containing what you typed. All the songs are defined in the
   provided songs.js file.

   - When you click on one song from the autocompletion list, it will select the song and add it in
   a list you need to display elsewhere in your page.

   - When you click on a song already selected (whether from the autocompletion list or your
   selected songs list), it will unselect the song.

   - Finally, you will need to add a button Validate which will display all the songs you have
   selected in an alert, separated by “, “. */}

        </div >
    )
}

export default SongComponent