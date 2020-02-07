import React from 'react'
import Person from './Person'

function PersonList() {

    const persons=[{
        id:1,
        name:"Demo 1",
        email:"aa@gmail.com"
    },
    {
        id:2,
        name:"Demo 2",
        email:"aa2@gmail.com"
    },
    {
        id:3,
        name:"Demo 3",
        email:"aa3@gmail.com"
    },
    {
        id:4,
        name:"Demo 4",
        email:"aa4@gmail.com"
    },
    {
        id:5,
        name:"Demo 5",
        email:"aa5@gmail.com"
    }
]


    const PersonList1 = persons.map((person,index) =>
        <Person key={person.name} person={person} index={index}></Person>
    ) 
    return ( <div>{PersonList1}</div>
    )
}

export default PersonList
