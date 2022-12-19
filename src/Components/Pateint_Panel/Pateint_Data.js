import { useEffect, useState } from "react";

import Nav from 'react-bootstrap/Nav';


const Pateint_Data=()=>{
 
  const [usersList, setUsersList] = useState([]);

 


    useEffect(() => {
        fetch("http://localhost:3008/Pateint")
          .then((resp) => resp.json())
          .then((info) => setUsersList(info));
        //  login()
  

      }, []);








    
    return(


      
      <table className="table table-bordered" varriant="danger">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
    </tr>
  </thead>
      
      <tbody >
        {usersList.map((Patient) => (
          <tr>
           <td>{Patient.id}</td>
            <td>{Patient.name}</td>
            <td>{Patient.email}</td>
             {/* <td> <Link to={`/Home/Edit_Doctors/${user.id}`}><Button>Edit</Button></Link></td> 
             <Link onClick={()=>Delet_User(user.id)}><Button>Delet</Button></Link> */}
            
          </tr>
        ))}
        
      </tbody>
    </table>

 
  
 

    



)
}; export default Pateint_Data;