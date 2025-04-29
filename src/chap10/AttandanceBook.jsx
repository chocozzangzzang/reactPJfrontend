import React from 'react';

const students = [
    {
        name : 'Inje',
    },
    {
        name : 'Steve',
    },
    {
        name : 'Bill',
    },
    {
        name : 'Jeff',
    },
]

function AttandanceBook(props) {
  
    return (
        <ul>
            {students.map((student, index) => {
                return (
                    <li key={index}>{student.name}</li>
                )
            })}
        </ul>
    )

}

export default AttandanceBook