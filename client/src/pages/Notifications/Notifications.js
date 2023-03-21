import React from "react";
import { useSelector } from "react-redux";

const NoMessage = () => {
    return (<div style={{ fontSize: 19, color: "lightgray", fontWeight: 'bolder' }}>No messages</div>)
}

const Notifications = (props) => {
    const messages = useSelector((state) => { return state.messages });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {(messages.length == 0) && <NoMessage />}
            
            {(messages.length > 0) &&
                <ul>{
                    messages.map((m, index) =>
                        <li key={index}>{m}</li>
                    )
                }
                </ul>
            }
        </div>
    );
}

export default Notifications;