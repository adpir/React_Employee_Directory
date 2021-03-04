import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function EmployeeSearch(props) {
    








  
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Employee Name:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="Employee"
            list="Employees"
            type="text"
            className="form-control"
            placeholder="Type the employee name"
            id="employees"
          />
          <datalist id="employees">
            {props.employee.map(employee => (
              <option value={employee} key={employee} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );

    
  }
  
  
  export default EmployeeSearch;
  