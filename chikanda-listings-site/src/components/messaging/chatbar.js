import image from "../../assets/img/girl.png";
import InputMessage from "./inputmessage";
import Messages from "./messages";
import { useState } from "react";


const USERMESSAGEDATA =[
    {id: "0", text: "Yes Hello"},
    {id: "1", text: "I understand"}
]

let ArrLen = USERMESSAGEDATA.length 

const ChatBar = () =>{
    const [texts, setTexts] = useState(USERMESSAGEDATA);

    const addUmessage = (m) =>{
        const newMessage = {id:ArrLen++, text: m}
        setTexts([...texts, newMessage])
    }

    return (
        <div className="flex-[2.5] bg-[#dbd8db]">
            <div className="flex h-[70px] items-center gap-[10px] bg-[#0E6BA8] px-[25px]">
                <img src={image} alt='profile pic' className=" h-[45px] w-[45px] rounded-full object-cover"/>
                <span className=" text-xl font-bold text-p_lave">Jane</span>
            </div>
            <Messages texts={texts}/>
            <InputMessage addUmessage={addUmessage}/>
        </div>
    )
}

export default ChatBar;