import React from "react"
import s from "./../Dialogs.module.css"

const Message = (props) => {

return (
    <div className={s.dialog}>{props.message} </div>
)
}


const MessageDia = (props) => {
    
    let messageElements = props.message.map( m => <Message message={m.message}/> )
    
    let memmageSMS = React.createRef()

    const addSMS = () => {
        let sms = memmageSMS.current.value
        alert(sms)
    }

    return (
        <div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={memmageSMS}> </textarea>
            </div>
            <div>
                <button onClick={addSMS}>Добавить</button>
            </div>
        </div>
    )
}

export default MessageDia;