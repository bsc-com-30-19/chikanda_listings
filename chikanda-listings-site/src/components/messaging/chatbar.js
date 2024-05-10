import image from "../../assets/img/girl.png";
import InputMessage from "./inputmessage";
import Messages from "./messages";

const ChatBar = () =>{
    return (
        <div className="flex-[2.5] bg-[#dbd8db]">
            <div className="flex h-[70px] items-center gap-[10px] bg-[#0E6BA8] px-[25px]">
                <img src={image} alt='profile pic' className=" h-[45px] w-[45px] rounded-full object-cover"/>
                <span className=" text-xl font-bold text-p_lave">Jane</span>
            </div>
            <Messages />
            <InputMessage />
        </div>
    )
}

export default ChatBar;