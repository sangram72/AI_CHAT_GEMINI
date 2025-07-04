import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Finallayout from "../Layouts/Finallayout";


const Router =()=>{
    return(
<BrowserRouter>
<Routes>
    <Route element={<Finallayout/>} path="/"/>
</Routes>
</BrowserRouter>
    )
}

export default Router;