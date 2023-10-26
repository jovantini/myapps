import React from "react";
import c from "./Navbar.module.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/Profile" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'white'})} >Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Dialogs" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'white'})}>Massage</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Music" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'white'})}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/News" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'white'})}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Settings" style={({ isActive }) => ({color: isActive ? 'greenyellow' : 'white'})}>Settings</NavLink>
            </div>
        </nav>)
}
export default Navbar;
