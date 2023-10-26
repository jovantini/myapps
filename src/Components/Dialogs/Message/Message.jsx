import React from "react"
import s from "./../Dialogs.module.css"

const Message = (props) => {

return (
    <div className={s.dialog}>{props.message} </div>
)
}


const MessageDia = (props) => {
    
    let messageElements = props.message.map( m => <Message message={m.message}/> )
    
    return (
        
            <div className={s.messages}>
                {messageElements}
            </div>
        
    )
}

export default MessageDia;