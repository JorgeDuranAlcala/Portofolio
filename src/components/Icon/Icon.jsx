import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, color, cls, onClick}) => {
    return (
        <>
            <FontAwesomeIcon icon={icon} className={cls} onClick={onClick} color={color}/>
        </>
    )
}

export default Icon
