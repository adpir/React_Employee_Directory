/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class EmployeesDB extends React.Component {
  state = {
    employeeRecords: [],
  };

  componentDidMount = () => {
    API.search().then((records) => {
      let data = records.data.results;
      console.log(data);
      let employeedata = [];
      for (let i = 0; i < data.length; i++) {
        employeedata.push({
          firstname: data[i].name.first,
          lastname: data[i].name.last,
          phone: data[i].phone,
          email: data[i].email,
          gender: data[i].gender,
          age: data[i].dob.age,
          picture: data[i].picture.thumbnail,
        });

        this.setState({ employeeRecords: employeedata });
      }
    });
  };
 
  render() {
    return (
      <div className="EmployeeDB">
        {/* <h1 className="text-center bg-danger text-center">Employee Data</h1> */}

        <Datatable
          rows={this.state.employeeRecords}
        />
       
      </div>
    
    );
  }
}

export default EmployeesDB;
