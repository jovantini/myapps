import React from "react";
import s from "./Dialogs.module.css";
import DialogsItems from "./DilogItem/DialogsItem.jsx";
import MessageDia from "./Message/Message.jsx";


const Dialogs = (props) => {
   
    return (
        <div className={s.dialogs}>
            <div className={s.dilogsItems}>
                <DialogsItems dialogs={props.dialogs}/>
              
            </div>
            <div className={s.messages}>
                <MessageDia message={props.message}/>
            </div>
        </div>
    )
}

export default Dialogs;