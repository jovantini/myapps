import React from "react"
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItems = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const DialogsItems = (props) => {

let dialogsElements = props.dialogs.map( d => <DialogItems name={d.name} id={d.id}/> );

    return (
       
            <div className={s.DilogsItems}>
                         
            {dialogsElements}

               
            </div>
           
        
    )
}

export default DialogsItems;