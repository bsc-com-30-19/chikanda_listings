import image from "../../assets/img/girl.png";

const Chat = () =>{
    return (
        <div className="flex-[2] bg-white">
            <div className="flex h-[50px] items-center gap-[10px] bg-[#15A8D5] px-[2.5px]">
                <img src={image} alt='profile pic' className=" h-[45px] w-[45px] rounded-full object-cover"/>
                <span>Jane</span>
            </div>
        </div>
    )
}

export default Chat;