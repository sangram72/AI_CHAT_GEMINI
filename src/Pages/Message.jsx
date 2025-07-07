import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

const Message = ({ chatdata, scrollRef }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    useEffect(() => {
        if (copiedIndex !== null) {
            const timer = setTimeout(() => setCopiedIndex(null), 1000);
            return () => clearTimeout(timer);
        }
    }, [copiedIndex]);

    return (
        chatdata &&
        chatdata.map((caaavalue, index) => (
            <div className="Message-Parent" key={index}>
                <div className="Sending-parent">
                    {caaavalue.USER_RESPONSE}
                </div>

                <div className="Received-Parent">
                    {caaavalue.AI_RESPONSE}
                </div>

                <div className="Copy-parent">
                    {copiedIndex === index ? (
                        <p className="P-copy">Copied...</p>
                    ) : (
                        <FaCopy
                            className="Copy_Button"
                            onClick={() => {
                                navigator.clipboard.writeText(caaavalue.AI_RESPONSE);
                                setCopiedIndex(index);
                            }}
                        />
                    )}
                </div>

                <div ref={scrollRef}></div>
            </div>
        ))
    );
};

export default Message;
