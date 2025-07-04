import React from "react";

export const Reusable_Button =(props)=>{
return(
    <>
    {props.isdisable==true?(
<></>
    ):(
  <button onClick={props.ONCLICK_EVENT} className="Button-Parent">

   <p>{props.name}</p>
    </button>
    )}
  
    </>
)
}