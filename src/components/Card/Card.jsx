import React from 'react'
import { Link } from 'react-router-dom'

const classes = {
    container: {
        width: '22.5em',
        maxHeight: 'auto',
        boxShadow:  '-20px 20px 60px #d9d9d9',
        borderRadius: '20px',
        color: 'rgba(0,0,0,0.8)',
        textAlign: 'center',
        padding: '0 0 4vmin 0',
        background: '#fff',
        position: 'relative'
    },
    title: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '4vmin 4vmin 2vmin 4vmin'
    },
    desc: {
        textAlign: 'left',
        fontSize: '1.0625em',
        padding: '0 4vmin'
    },
    img_cont: {
        width: '100%',
        height: '100px',
    },
    post_img: {
        width: '100%'
    },
}

const Card = ({ title, desc, url, link, linkName, cls, id, blank, Is}) => {

    //console.log(id)

    const changeUrl = id ? `${link}/${id}` : link;

    return (
        <div>
            <div style={classes.container} className={cls} >
                <div style={{ backgroundImage:`url(${url})`, backgroundSize: 'cover' , width: '100%', height: '250px' }}>
                </div>
                <h3 style={classes.title}>
                    { title }
                </h3>
                <p style={classes.desc}>
                    { desc }
                </p>
                {

                (link && Is === "project")
                 ? <a 
                    href={changeUrl}
                    target={blank}
                    rel="noopener noreferrer"
                    className="linkPath"
                    >
                    {linkName}
                    </a>
                :
                    <Link 
                    to={changeUrl}
                    target={blank}
                    rel="noopener noreferrer"
                    className="linkPath"
                    >
                    {linkName}
                    </Link>
                }
            </div>
        </div>
    )

}

export default Card
