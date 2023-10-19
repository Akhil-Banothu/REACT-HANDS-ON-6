import { Link } from "react-router-dom";
import { Store } from "./StoreCompo";
import { useContext } from "react";

function StudentCompo() {
   const createContent = useContext(Store);
   return (
      <>
         <header className="student-heading">
            <h1>Student Details</h1>
            <Link to='/student-desc'>
               <button>Add new student</button>
            </Link>
         </header>

         <table border='1px' cellSpacing='0' className="student-table">
            <thead>
               <tr>
                  <th className="display-left">Name</th>
                  <th className="display-left">Age</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Change</th>
               </tr>
            </thead>
            <tbody>
               {createContent.data.map((item, index) => {
                  return (
                     <tr key={index}>
                        <td className="display-left">{item.name}</td>
                        <td className="display-left">{item.age}</td>
                        <td>{item.course}</td>
                        <td>{item.batch}</td>
                        <td>
                           <Link to={`/editstudent/${index}`}>Edit</Link>
                        </td>
                     </tr>
                  );
               })}

            </tbody>
         </table >
      </>
   );
}

export default StudentCompo;