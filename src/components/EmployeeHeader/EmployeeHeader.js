import React from "react";

function EmployeeHeader (props) {
    let employee =props.employee;
    return (
        <thead> 
        <tr>    
            {Object.keys(employee).map (key => ( 
                <th>{[key]}</th>
            ))}
        </tr> 
        </thead> 
    )

   
}
export default EmployeeHeader;

       


