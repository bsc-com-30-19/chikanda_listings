import Sidebar from "../components/messaging/sidebar";
import ChatBar from "../components/messaging/chatbar";
import { Fragment } from "react";

const MessagePage = () =>{
    return(
        <Fragment>
        <div className="flex h-screen overflow-hidden">
            
            <Sidebar/>
            <ChatBar/>
        </div>
        </Fragment>
    )
}

export default MessagePage;