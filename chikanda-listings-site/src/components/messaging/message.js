import pfp from "../../assets/img/girl.png"

const Message = (props) =>{
    return (
        <li>
        <div className="flex gap-[20px]">
            <div className="flex-col mb-[24px]">
                <img src={pfp} alt='profile pic' className=" h-[50px] w-[50px] rounded-full object-cover "/>
                <span>Just now</span>
            </div>
            <div className="flex flex-col max-w-[80%] gap-[10px]">
                <p className=" px-[20px] py-[5px] rounded-[10px] max-w-max bg-indigo-400">{props.text}</p>
            </div>
        </div>
        </li>
    )
}

export default Message;