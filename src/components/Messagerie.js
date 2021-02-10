import React, { useState, useEffect } from 'react';


const Messagerie = (props) => {

    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState("")

    const createNewMessage = () => {
        let newMessage = [...messageList]
        newMessage.push(message)
        setMessageList(newMessage)
    }

    const deleteMessage = (index) => {
        let newMessage = [...messageList]
        newMessage.splice(index, 1)
        setMessageList(newMessage)
    }

    const deleteAllMessages = () => {
        setMessageList([]) // Liste vide !! Pour vider la liste des message
    }

    return (
        <div>
            <div style={{ height: "300px", width: "300px", overflowY: "auto" }}>
                {messageList.map((myMessage, index) => (<div key={index} >
                    {myMessage}
                    <button onClick={() => deleteMessage(index)}>Delete</button>
                </div>))}
            </div>
            <button onClick={() => deleteAllMessages()}>Delete all messages</button>
            <input placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)} />
            <button onClick={() => createNewMessage()}>Send</button>







        </div >
    )

}

export default Messagerie