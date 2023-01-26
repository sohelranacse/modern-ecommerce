import React from 'react'
import './Title.scss'

const Title = ({title}) => {
    return (
        <div className="title_component">
            <div className="title_2">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Title
