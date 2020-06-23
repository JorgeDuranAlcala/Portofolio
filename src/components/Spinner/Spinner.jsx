import React from 'react'
import style from "./spinner.module.css"

const Spinner = () => {
    return (
        <div className={style.container}>
            <div className={style.spin}>
            </div>
        </div>
    )
}

export default Spinner
