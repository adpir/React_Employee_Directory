 import React from "react";
 import { MDBDataTable} from "mdbreact";
  import "mdbreact/dist/css/mdb.css";

 export default function Datatable(props) {
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
            {
                label:"Picture",
                field:"picture",
                sort:"asc",
                width:125
            },
        ],
        rows: props.rows
           
  
    }
  
    return <MDBDataTable striped bordered hover data={data} />
  
  }

