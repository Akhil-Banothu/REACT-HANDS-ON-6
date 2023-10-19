import { useContext } from "react";
import { Store } from "./StoreCompo";
import { useNavigate } from "react-router-dom";


function NewStudent() {
   const contextStore = useContext(Store);
   console.log(contextStore.data);
   const Navi = useNavigate();

   const newStudent = {
      name: '',
      age: '',
      course: '',
      batch: '',
   }

   const handleChange = (event) => {
      newStudent[event.target.name] = event.target.value;
   }

   const handleUpdate = () => {
      contextStore.data.push(newStudent);
      Navi('/student');
   }

   const handleCancel = () => {
      Navi('/student');
   }

   return (
      <>
         <div className="input-box">
            <div className="box">
               <label>Name</label>
               <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Age</label>
               <input type="number" placeholder="Age" name="age" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Course</label>
               <input type="text" placeholder="Course" name="course" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Batch</label>
               <input type="text" placeholder="Batch" name="batch" onChange={handleChange} />
            </div>
         </div>

         <div className="btn-container">
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-update" onClick={handleUpdate}>Submit</button>
         </div>
      </>
   );
}

export default NewStudent;