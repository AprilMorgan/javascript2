import React from 'react'
// import Person from "./Person"
function NameList() {
    const names = ["April", "Vicki", "Vanessa"]
      // {
      //   id: 1, 
      //   name: "April", 
      //   age: 44,
        
      // },
      // {
      //   id: 2, 
      //   name: "Vicki", 
      //   age: 30,
      // },
      // {
      //   id: 3,
      //   name: "Vanessa",
      //   age: 54,
      // },
    

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
  
}

export default NameList;

