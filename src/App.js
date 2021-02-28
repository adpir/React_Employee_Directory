import React, { Component } from "react";
import EmployeeHeader from "./components/EmployeeHeader/EmployeeHeader";
import EmployeeTable from "./components/EmployeeTable/employeeTable";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employee
  };
  // useEffect(() => {
  //   setEmployees(employee_list);
  // }, []);
  removeFriend = id => {
     //Filter this.state.friends for friends with an id not equal to the id being removed
     const employee = this.state.employee.filter(employee => employee.id !== id);
     // Set this.state.friends equal to the new friends array
 this.setState({ employee });
 };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div> 
        <table className ="table table-stripped table dark"> 
        <EmployeeHeader employee ={employee[0]} />
        <tbody> 
        {this.state.employee.map(employee => (
          <EmployeeTable
            employee={employee}
            // id={friend.id}
            // key={friend.id}
            // name={friend.name}
            // image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
        </tbody>
        </table>
     </div>
    );
  }
}

export default App;