import React from 'react'
import {PATH} from "./Pages";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'


function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} className={({ isActive}) => isActive ? s.active : s.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({ isActive}) => isActive ? s.active : s.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({ isActive}) => isActive ? s.active : s.link}>junior</NavLink>

        </div>
    )
}

export default Header
