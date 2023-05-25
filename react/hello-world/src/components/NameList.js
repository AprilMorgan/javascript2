import React from 'react'
import Person from "./Person"
function NameList() {
    const persons = [
      {
        id: 1, 
        name: "April", 
        age: 44,
        
      },
      {
        id: 2, 
        name: "Vicki", 
        age: 30,
      },
      {
        id: 3,
        name: "Vanessa",
        age: 54,
      },
    ]

    const personlist = persons.map(person => <Person person={person} />)
    return <div>{personlist}</div>
  
}

export default NameList;

