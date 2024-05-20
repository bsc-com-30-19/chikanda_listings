import Sidebar from "../components/messaging/sidebar";
import ChatBar from "../components/messaging/chatbar";
import Navbar from "../components/navbar"
import { Fragment } from "react";

const MessagePage = () =>{
    return(
        <Fragment>
            <Navbar />
            <div className="flex h-[calc(100vh-50px)] overflow-hidden rounded-t-[10px]">
                
                <Sidebar/>
                <ChatBar/>
            </div>
        </Fragment>
    )
}

export default MessagePage;