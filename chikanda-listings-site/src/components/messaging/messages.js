import Message from "./message";

const Messages = () =>{
    return (
        <div className="p-[10px] h-[calc(100%-150px)] overflow-y-scroll">
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages;