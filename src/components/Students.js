import React,{useState,createContext,useContext} from 'react';
import {Link} from 'react-router-dom'
export const store=createContext()
let Students = (props) => {
  const [students,setStudents]=useState([
    {
    "Name":"Joe",
    "Age":"25",
    "Course":"HTML",
    "Batch":"August",
    "id":"1"
    },
    
    {
        "Name":"Biden",
        "Age":"27",
        "Course":"Css",
        "Batch":"september",
        "id":"2" 
        },
        {
            "Name":"Martin",
            "Age":"27",
            "Course":"React",
            "Batch":"December",
            "id":"3"
            },
            
            {
                "Name":"Mary",
                "Age":"23",
                "Course":"Nodejs",
                "Batch":"januauary",
                "id":"4" 
                },
                {
                    "Name":"Rosie",
                    "Age":"24",
                    "Course":"Database",
                    "Batch":"April",
                    "id":"5"
                    }
        ])
  return (
    <div>
      <store.Provider value={[students,setStudents]}>
      {props.children}
      </store.Provider>
      <h1 style={{display:"inline-block",position:"relative",left:"-550px"}}>Students Details</h1>
      <button style={{borderRadius: "10px",display:"inline-block",position:"relative",right:"-550px"}}><Link to="/add-student">Add New Student</Link></button>
      <br /><br /><br /><br />
      <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {students.map((stud)=>(<tr key={stud.id}>
<td>{stud.Name}</td>
<td>{stud.Age}</td>
<td>{stud.Course}</td>
<td>{stud.Batch}</td>
<td><Link to="/edit">Edit</Link></td>

</tr>
      ))}
  </tbody>
</table>
    </div>
  );
}

export default Students;
