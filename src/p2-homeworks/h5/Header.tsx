import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type ObjectActiveClassName = {
    isActive: boolean
}

function Header() {
    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    const buttonHandler = () => buttonIsClicked ? setButtonIsClicked(false) : setButtonIsClicked(true)

    const isActive = ({isActive}: ObjectActiveClassName) => isActive ? `${s.active} ${s.menuItem}` : s.menuItem

    return (
        <div className={`${s.wrapper} ${(buttonIsClicked) ? s.buttonIsNotClickedClicked : s.buttonIsClicked}`}>
            <NavLink className={isActive} to={'/pre-junior'}>PreJunior</NavLink>
            <NavLink className={isActive} to={'/junior'}>Junior</NavLink>
            <NavLink className={isActive} to={'/junior-plus'}>JuniorPlus</NavLink>
            <button onClick={buttonHandler}
                    className={`${s.menuButton} 
                     ${(buttonHandler)
                        ? s.buttonIsClicked
                        : s.buttonIsNotClicked}`}
            ></button>
        </div>
    )
}

export default Header
