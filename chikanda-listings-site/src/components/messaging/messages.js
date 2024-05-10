import Message from "./message";

const Messages = () =>{
    return (
        <div className="p-[10px] h-[calc(100%-130px)] overflow-scroll">
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages;