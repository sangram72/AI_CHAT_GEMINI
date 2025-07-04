import React from "react";

const Message = ({ chatdata ,scrollRef }) => {
    console.log(chatdata, "chatdata");
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
                    <div ref={scrollRef}></div>
                </div>
            );
        })
    );
};

export default Message;
