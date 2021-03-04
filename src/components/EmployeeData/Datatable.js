import React from "react";
// import "fontawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBDataTable} from "mdbreact";

function Datatable(props){
    const data = {
    columns: [
        {
            label:"Firstname",
            field:"firstname",
            sort:"asc",
            width:125
        },
        {
            label:"LastName",
            field:"lastname",
            sort:"asc",
            width:125
        },
        {
            label:"Phone",
            field:"phone",
            sort:"asc",
            width:125
        },
        {
            label:"Email",
            field:"email",
            sort:"asc",
            width:125
        },
        {
            label:"Gender",
            field:"gender",
            sort:"asc",
            width:125
        },
        {
            label:"Age",
            field:"age",
            sort:"asc",
            width:125
        },
    ],
    rows: [
        {
          rows:props.rows,
          columns:props.columns,  
        }

    ]
};
    return(
        // <MDBDataTable data={props.data} />
<MDBDataTable striped
bordered
hover
data = {data}
/>
    );
}

export default Datatable;
