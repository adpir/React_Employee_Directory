import React, { useState } from "react";

function SearchForm(props) {
    const [input, setInput] = useState();

    const handleChange = (e) => {
        setInput(
            e.target.value
        )
        console.log(input);
        const value = e.target.value.toLowerCase();
        const data = props.employee.filter(employee => employee.firstName.toLowerCase().indexOf(value) !== -1);
        console.log(props.employee);
        console.log(data);
        props.setFilter(data);
        console.log(props.setFilter(data));
    }

    return (
        <nav className="navbar navbar-light bg-light justify-content-end">
            <div className="container-fluid">
                <form className="row g-3">
                    <div className="form-group ">
                        <label htmlFor="employee">Filter By Name</label>
                        <input
                            onChange={(e) => handleChange(e)}
                            name="employee"
                            list="employees"
                            type="text"
                            className="form-control"
                            placeholder="Type in an employee name to begin"
                            id="id"
                        />
                    </div>
                </form>
            </div>
        </nav>
    );
}


export default SearchForm;