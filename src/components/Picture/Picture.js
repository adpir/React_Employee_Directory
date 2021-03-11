import React from "react";

function Picture(props){
    return(
<td className="text-center">
      <img alt={props.picture} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
  
    </td>
    )
}

export default Picture;
