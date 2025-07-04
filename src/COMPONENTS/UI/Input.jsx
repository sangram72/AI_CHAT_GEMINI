import React from "react";

const Reusable_Input =({values,On_changevalue,onkeydown})=>{
    return (
    <>
            <input  className="Inputss" type="text" placeholder="Begin" value={values} onChange={On_changevalue} onKeyDown={onkeydown}/>
        </>
    )

}

export default Reusable_Input