import Message from "./message";
import UserMessage from "./usermessage";


const Messages = (props) =>{
    
    const textlist = props.texts?.map((utext) => (<UserMessage id={utext.id} text={utext.text} key={utext.id}/>))
    return (
        <div className="p-[10px] h-[calc(100%-150px)] overflow-y-scroll w-full">
            <ul className="flex flex-col">
            <Message text = "Hello"/>
            <Message text = "I have a question"/>
            <Message text = "Do the self contained rooms have kitchens?"/>
            {textlist}
            </ul>
        </div>
    )
}

export default Messages;