 import React from "react";
import EmployeeData from "./components/EmployeeData/EmployeeData";
import Header from "./components/Header/Header";
 import Footer from "./components/Footer/Footer";

// function App() {
//     return <EmployeeData />;
//   }
  
//   export default App;

 class App extends React.Component {
// //   // Setting this.state.friends to the friends json array
  
// //   // useEffect(() => {
// //   //   setEmployees(employee_list);
// //   // }, []);
// // //   removeFriend = id => {
// // //      //Filter this.state.friends for friends with an id not equal to the id being removed
// // //      const employee = this.state.employee.filter(employee => employee.id !== id);
// // //      // Set this.state.friends equal to the new friends array
// // //  this.setState({ employee });
// // //  };

// //   // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
     return (
     <div> 

      <Header/>
     <EmployeeData/>
     <Footer />
      </div>
    );
    }
 }
 export default App;
