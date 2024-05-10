import sndimg from "../../assets/icons/sendmessage.png";
import attach from "../../assets/icons/image_attachment.png";

const InputMessage = () =>{
    return(
        <div className="h-[80px] bg-gray-300 p-[10px] flex items-center justify-between">
            <input type="text" placeholder="Type a message" className="border-none outline-none w-full bg-transparent p-[10px]"/>
            <div className="flex gap-[20px] items-center">
                <input type="file" className=" hidden"/>
                <label htmlFor="file">
                    <img src={attach} alt="Attach " className="h-[50px] w-[50px] cursor-pointer"/>
                </label>
                <button className=" appearance-none">
                    <img src={sndimg} alt="Attach" className="h-[50px] w-[50px] cursor-pointer"/>
                </button>
            </div>
        </div>
    );
};

export default InputMessage;