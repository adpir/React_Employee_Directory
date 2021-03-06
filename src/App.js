 import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";
 import Navbar from "./components/Navbar/Navbar";
// import EmployeeTable from "./components/datatable/EmployeeData"
import EmployeeDB from "./components/datatable/EmployeesDB";

 function App() {
      return (
         <div>
        <Header/>

         <EmployeeDB />
        <Footer/>
        
        <Navbar/>
      </div>
       )
    }
    export default App;


  
