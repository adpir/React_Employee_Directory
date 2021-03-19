import React, { useEffect, useState } from "react";
import API from "../../utils/API.js";
import SearchForm from "../SearchForm";

function EmployeesDB() {
  const [employee, setEmployee] = useState([]);
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    API.fetchEmployees()
      .then(data => {
        setEmployee(data);
        setFilter(data);
      })
      .catch(err => console.log(err));
  }
  const sortNames = () => {
    const name = [...Filter]
    name.sort((a, b) => (
      a.firstName > b.firstName ? 1 : -1));
    console.log(name);

    setFilter(name);
  };
  const sorts = () => {
    const sortID = [...Filter]
    sortID.sort((a, b) => (
      a.id > b.id ? 1 : -1));
    console.log(sortID);

    setFilter(sortID);
  };

  return (
    <>
      <div>
        <SearchForm employee={employee}
          setFilter={setFilter} />
        <button type="button" className="btn btn-warning" onClick={sortNames}>Sort By Name</button>
        <button type="button" className="btn btn-danger" onClick={sorts}>Sort By ID</button>

      </div>
      <table className="table">
        <thead>
          <tr className="table table-info">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {Filter.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.gender}</td>
              <td><img alt={person.picture} src={person.picture} /></td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  );
}

export default EmployeesDB;