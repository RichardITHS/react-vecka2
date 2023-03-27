import React from 'react'

function ListRendering2() {
    const names = ['Richard', 'Tim', 'Jenny', 'Shahad']
    const nameList = names.map((name) => <h2>{name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default ListRendering2
