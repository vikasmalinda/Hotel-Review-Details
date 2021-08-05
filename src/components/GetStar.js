import React from 'react'

function GetStar(props) {
    return (
        <svg height="25" width="23" className="star" data-rating={props.rating}
                data-active="true">
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
        </svg>
    )
}

export default GetStar