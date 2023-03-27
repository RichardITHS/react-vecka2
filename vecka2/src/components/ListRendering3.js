import React from 'react'

function ListRendering3() {

    const persons = [
        {
            id:1,
            name: 'Glenn',
            age: 43,
            skill: 'React'

        },
        {
            id:2,
            name: 'Eva',
            age: 28,
            skill: 'Vue'

        }
    ]

    const personList = persons.map((person) => (
        <h2 key={person.id}>
            My name is: {person.name}
            and my age is: {person.age} and i can
            do some great stuff with {person.skill}
        </h2>
    ))

  return (
    <div>{personList}</div>
  )
}

export default ListRendering3
