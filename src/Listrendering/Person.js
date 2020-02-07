import React from 'react'

function Person({person,index}) {
    return (
        <div>
            <h2>Hi I am {person.name}. email {person.email} . index - {index}</h2>
        </div>
    )
}

export default Person
