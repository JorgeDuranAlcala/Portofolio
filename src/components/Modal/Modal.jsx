import React from 'react'
import classes from "./Modal.module.css"
import UKI from "../../assets/img/svgs/reino-unido.svg"
import ES from "../../assets/img/svgs/espana.svg"

const Modal = ({ handleClick, display }) => {

    return (
        <div className={classes.container} style={{ display }}>
            <div className={classes.modal}>
                <form>
                    <span>✨ Choose a Language  ✨</span>
                    <div className={classes.button_group}>
                        <button type="button" onClick={handleClick} value="es">
                            <div className={classes.UK}>
                                <img src={ES} alt="language flag"/>
                            </div>
                            Español
                        </button>
                        <button type="button" onClick={handleClick} value="en-US">
                            <div className={classes.UK}>
                                <img src={UKI} alt="language flag"/>
                            </div>
                           English
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
