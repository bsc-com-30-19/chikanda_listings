import pfp from "../../assets/img/girl.png"

const Message = () =>{
    return (
        <div className="flex gap-[20px]">
            <div className="flex-col mb-[30px]">
                <img src={pfp} alt='profile pic' className=" h-[50px] w-[50px] rounded-full object-cover "/>
                <span>Just now</span>
            </div>
            <div className=" flex-col max-w-[80%]">
                <p className=" px-[20px] py-[5px] rounded-[10px] max-w-max">Hello</p>
                <img src={pfp} alt='profile pic' className=" h-auto w-[100px]"/>
            </div>
        </div>
    )
}

export default Message;