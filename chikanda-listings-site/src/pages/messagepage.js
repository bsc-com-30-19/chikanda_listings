import Sidebar from "../components/messaging/sidebar";
import Chat from "../components/messaging/chat";
import { Fragment } from "react";

const MessagePage = () =>{
    return(
        <Fragment>
        <div className="flex h-screen overflow-hidden">
            
            <Sidebar/>
            <Chat/>
        </div>
        </Fragment>
    )
}

export default MessagePage;