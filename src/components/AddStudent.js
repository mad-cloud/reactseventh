import React, {useState,useContext} from 'react';
import {store} from './Students';
import {Link} from 'react-router-dom';
let AddStudent=()=>{
    const[objdet,setInput]=useState({
        Name:"",
        Age:"",
        Course:"",
        Batch:""
    })
    const [students,setStudents]=useContext(store)
    let inputEvent=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInput({...objdet,[name]:value})
    }
    const SubmitHandler=()=>{
        const collection=[{...objdet,id:new Date().getTime().toString()}]
        setStudents([...students,collection])
        setInput({Name:" ",Age:" ",Course:" ",Batch:" "})
        // setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])

    }
return(
<div>       
<div>
<label>Name:</label>
<input type="text" name='name' value={objdet.Name} onChange={inputEvent} />
<label>Age:</label>
<input  type="text" name='age' value={objdet.Age} onChange={inputEvent} />
<label>Course:</label>
<input  type="text" name='course' value={objdet.Course} onChange={inputEvent} />
<label>Batch:</label>
<input type="text" name='batch' value={objdet.Batch} onChange={inputEvent} />
</div>
<div>
<button><Link to="/student">Cancel</Link></button>
<button><Link to="/student" onClick={SubmitHandler}>Submit</Link></button>
</div>
</div>
)
}
export default AddStudent;