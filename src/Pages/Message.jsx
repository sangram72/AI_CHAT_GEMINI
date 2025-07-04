import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
const Message = ({ chatdata ,scrollRef }) => {
    const [Iscopied,setIsCopied]=useState(false)
    console.log(chatdata, "chatdata");

    useEffect(()=>{
if(Iscopied==true){
    setTimeout(() => {
        setIsCopied(false)
    }, 500);
}
    },[Iscopied])
    return (
        chatdata && chatdata.map(function (caaavalue, index) {
            return (
                <div className="Message-Parent" key={index}>
              
                    <div className="Sending-parent">
                        {caaavalue.USER_RESPONSE}
                    </div>

               
                    <div className="Received-Parent">
                        {caaavalue.AI_RESPONSE}
                    </div>
                    <div className="Copy-parent">
                        {Iscopied==false?
                        (
                             <FaCopy className="Copy_Button" onClick={()=> {navigator.clipboard.writeText(caaavalue.AI_RESPONSE),setIsCopied(true)}}/>
                        ):(
                         <p>Copied....</p>
 
                        )
                        }
                   
                  
                    </div>
                    <div ref={scrollRef}></div>
                </div>
            );
        })
    );
};

export default Message;
