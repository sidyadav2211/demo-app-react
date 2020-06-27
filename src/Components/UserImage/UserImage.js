import React from 'react'
const ImageUrl = props => {
    return (
        <div>
            <img src={props.url}
                alt={props.name} />
            <p>{props.massage}</p>
        </div>
    )
}
export default ImageUrl;