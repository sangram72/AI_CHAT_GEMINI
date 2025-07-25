import React, { useEffect, useRef, useState } from "react";

import Message from "./Message";
import Reusable_Input from "../COMPONENTS/UI/Input";
import { IoSend } from "react-icons/io5";

import API_SERVICE_PROVIDER from "../API_SERVICE_PROVIDER.js";



 

const BodyConatiner=()=>{
    
    const [Input_Value,setInput_Value]=useState("")

    const refbottom = useRef()

  


const[message_data,setmessagedata]=useState([])
const [inputarr,setinputarr]=useState([])
   
    function Changethevalue(e){
    
      setInput_Value(e.target.value)
 
    }

      useEffect(()=>{
        
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },[message_data])
    


const getResponseForGivenPrompt = async () => {

    try {


    
 
    let res = await API_SERVICE_PROVIDER.GET_API_VALUE(Input_Value)

   

 
     
      let outputobj = {
        "USER_RESPONSE":Input_Value,
        "AI_RESPONSE":res?res:null
      }
      setmessagedata([...message_data,outputobj])
   setInput_Value("")
  
     
    }
    catch (error) {
      console.log(error)
      console.log("Something Went Wrong");
  
        
     
  
    }
  }

const bottomRef = useRef()

  useEffect(() => {
  if (bottomRef.current) {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [message_data]);


  





  
    

     const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if(Input_Value!=""){
 getResponseForGivenPrompt()
      setInput_Value("")
        }else{
          alert("Fill the Message")
        }
     
   
       }
    }
    
    return(
        <div className="Body-Parent" ref={refbottom} >
<Message  chatdata={message_data} scrollRef={bottomRef} />
<div className="Lower">
  
    <Reusable_Input  values={Input_Value} On_changevalue={Changethevalue} onkeydown={handleKeyDown}/>
  
       <IoSend className="button-icon" onClick={()=>{
  Input_Value==""   ?alert("Fill the message"):getResponseForGivenPrompt

  }}/>
    

 </div>


        </div>
    )
}
export default BodyConatiner
