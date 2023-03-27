import React from 'react'

function ListRendering() {
    const names = ['Richard', 'Bosse', 'Eva', 'Josefin']
    return (
        /*  <div>
            {names[0]}
            {names[1]}
            {names[2]}
            {names[3]}
        </div> */
        <div>
            {names.map((name) => (
                <h2>{name}</h2>
            ))}
        </div>
    )
}

export default ListRendering
