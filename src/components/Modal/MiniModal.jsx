import React from 'react'
import classes from "./Modal.module.css"
import UKI from "../../assets/img/svgs/reino-unido.svg"
import ES from "../../assets/img/svgs/espana.svg"
import { getLocalStorage } from "../../utils/manageLocalStorage.js";


const MiniModal = ({handleClick}) => {

    const storage = getLocalStorage('lang')

    return (
        <div className={classes.miniModal} onClick={handleClick}>
            <div className={classes.current_lang_img}>
                <img src={ (storage === 'en-US') ? UKI : ES} alt="current flag language "/>
            </div>
        </div>
    )
}

export default MiniModal
