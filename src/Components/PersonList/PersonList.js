import React from 'react'

const Person = props => {
    return (
        <div>
            <h3>{props.pname}</h3>
            <h3>{props.pid}</h3>
            <p>{props.ptext}</p>
        </div>

    )

}
export default Person;