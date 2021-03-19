/* eslint-disable no-unused-expressions */
import React from "react";
import Jumbotron from "./components/Jumbotron";
import EmployeesDB from "./components/datatable/EmployeesDB";
import Footer from "./components/Footer";

function App() {
   return (
      <div>
         <Jumbotron />
         <EmployeesDB />
         <Footer />
      </div>
   )
}
export default App;



