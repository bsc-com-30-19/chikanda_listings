import Sidebar from "../components/messaging/sidebar";
import ChatBar from "../components/messaging/chatbar";
import { Fragment } from "react";

const MessagePage = () =>{
    return(
        <Fragment>
        <div className="flex h-[calc(100vh-50px)] overflow-hidden rounded-t-[10px]">
            
            <Sidebar/>
            <ChatBar/>
        </div>
        </Fragment>
    )
}

export default MessagePage;