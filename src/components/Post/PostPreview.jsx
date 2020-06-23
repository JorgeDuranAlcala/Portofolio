import React from 'react'
import PropTypes from 'prop-types'
import classes from './PostPreview.module.css'

const PostPreview = ({ img, title, desc, onClick, id }) => {
  return (
    <div className={classes.container} style={{ backgroundImage: `url(${img})` }} onClick={() => onClick(id)}>
        <h3>{title}</h3>
    </div>
  )
}

PostPreview.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired
}

export default PostPreview
