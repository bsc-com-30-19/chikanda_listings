import Message from "./message";
import UserMessage from "./usermessage";

const Messages = () =>{
    return (
        <div className="p-[10px] h-[calc(100%-150px)] overflow-y-scroll">
            <Message />
            <Message />
            <Message />
            <UserMessage />
        </div>
    )
}

export default Messages;