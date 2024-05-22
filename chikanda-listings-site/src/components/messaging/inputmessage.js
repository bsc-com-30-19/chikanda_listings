
import sndimg from "../../assets/icons/sendmessage.png";
import attach from "../../assets/icons/image_attachment.png";

const InputMessage = () => {
  
  return (
    <div className="h-[80px] bg-[#0E6BA8] p-[10px] flex items-center justify-between">
      <input
        type="text"
        placeholder="Type a message"
        className="border-none rounded-[5px] outline-none w-full bg-[#37476a] p-[10px] text-p_lave"
      />
      <div className="flex gap-[10px] items-center">
        <div className="h-[50px] w-[50px]">
          <input type="file" className=" hidden" />
          <img
            src={attach}
            alt="attach"
            className=" h-[48px] w-[48px] cursor-pointer"
          />
        </div>
        <div>
          <button className="h-[50px] w-[50px] appearance-none">
            <img
              src={sndimg}
              alt="Send"
              className=" h-[48px] w-[48px] cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputMessage;
