import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeCompo from "./Home";
import StudentCompo from "./Student";
import ContactCompo from "./Contact";
import './style.css';
import { useState } from "react";
import { Store } from "./StoreCompo";
import EditStudentCompo from "./EditStudent";
import NewStudent from "./NewStudent";

function RouteCompo() {
   const [studentData, setStudentData] = useState([
      { name: "John", age: "26", course: "MERN", batch: "October", },
      { name: "Doe", age: "25", course: "MERN", batch: "November", },
      { name: "Biden", age: "26", course: "MERN", batch: "September", },
      { name: "Barar", age: "22", course: "MERN", batch: "September", },
      { name: "Christ", age: "23", course: "MERN", batch: "October", },
      { name: "Elent", age: "24", course: "MERN", batch: "November", },
      { name: "Harshita Sharma", age: "24", course: "MERN", batch: "October", },
   ])
   return (
      <>
         <BrowserRouter>
            <nav className="nav-bar">
               <Link className="route-bar" to="/">Home</Link>
               <Link className="route-bar" to='/student'>Student</Link>
               <Link className="route-bar" to='/contact'>Contact Us</Link>
            </nav>
            <Routes>
               <Route path='/' element={<HomeCompo />} />
               <Route path='/student' element={
                  <Store.Provider value={{data: studentData, setData: setStudentData}}>
                     <StudentCompo />
                  </Store.Provider>
               } />
               <Route path='/editstudent/:id' element={
                  <Store.Provider value={{data: studentData, setData: setStudentData}}>
                     <EditStudentCompo />
                  </Store.Provider>
               } />
               <Route path='/contact' element={<ContactCompo />} />
               <Route path='/student-desc' element={
                  <Store.Provider value={{ data: studentData, setData: setStudentData }}>
                     <NewStudent />
                  </Store.Provider>
               } />
            </Routes>
         </BrowserRouter >
      </>
   );
}

export default RouteCompo;