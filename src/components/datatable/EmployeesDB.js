/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";


class EmployeesDB extends React.Component {
  state = {
    loading: true,
    employees: []
  };

  async componentDidMount() {
    const url = ('https://api.randomuser.me/?results=50')
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false });
  }
  //  const { data } = this.props;
  // const employeesList = data.map(name => {
  //   return (
  //     <li key={name.id} className={name.first}>{name.last}</li>
  //   )
  // })
  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.employees.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>

        {/* <p>{this.props.filterText}</p> */}
        <table className="table table-dark table-stripped">
          <thead className="thead-font">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody className="tbody-font">
            {this.state.employees.map(person => (
              <tr>
                <th>{person.name.first}</th>
                <th scope="row">
                  {person.name.last}</th>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                {<td><img src={person.picture.medium} /></td>}
              </tr>
            ))}
          </tbody>
        </table >
      </div >
    )



  }
}



export default EmployeesDB;


