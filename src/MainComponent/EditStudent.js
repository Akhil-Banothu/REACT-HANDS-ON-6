import { useContext } from "react";
import { Store } from "./StoreCompo";
import { useNavigate, useParams } from "react-router-dom";


function EditStudentCompo() {
   const contextStore = useContext(Store);
   const contextIndex = useParams().id;
   const Navi = useNavigate();

   const updateStudent = {
      name: contextStore.data[contextIndex].name,
      age: contextStore.data[contextIndex].age,
      course: contextStore.data[contextIndex].course,
      batch: contextStore.data[contextIndex].batch
   }
   console.log(updateStudent.name);

   const handleChange = (event) => {
      updateStudent[event.target.name] = event.target.value;
   }

   const handleUpdate = () => {
      contextStore.data[contextIndex] = updateStudent;
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
               <input type="text" placeholder={contextStore.data[contextIndex].name} name="name" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Age</label>
               <input type="number" placeholder={contextStore.data[contextIndex].age} name="age" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Course</label>
               <input type="text" placeholder={contextStore.data[contextIndex].course} name="course" onChange={handleChange} />
            </div>
            <div className="box">
               <label>Batch</label>
               <input type="text" placeholder={contextStore.data[contextIndex].batch} name="batch" onChange={handleChange} />
            </div>
         </div>

         <div className="btn-container">
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-update" onClick={handleUpdate}>Update</button>
         </div>
      </>
   );
}

export default EditStudentCompo;