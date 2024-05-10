import image from "../../assets/img/girl.png";

const Chats = () =>{
    return(
        <div className="p-[10px] flex items-center gap-[10px] cursor-pointer hover:bg-gray-500">
            <img src={image} alt='profile pic' className=" h-[50px] w-[50px] rounded-full object-cover"/>
            <div>
                <span className="text-xl font-semibold">Jane</span>
                <p>Hello am I doe?</p>
            </div>
        </div>
    )
}

export default Chats;