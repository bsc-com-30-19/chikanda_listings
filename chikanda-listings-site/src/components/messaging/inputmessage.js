import sndimg from "../../assets/icons/sendmessage.png";
import attach from "../../assets/icons/image_attachment.png";
import { useState } from "react";

const InputMessage = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addUmessage(text);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="h-[80px] bg-[#0E6BA8] p-[10px] flex items-center justify-between">
      <form
        className="inline-flex w-full items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          id="text-input"
          type="text"
          placeholder="Type a message"
          className="border-none rounded-[5px] outline-none w-full bg-[#37476a] p-[10px] text-p_lave"
          value={text}
          onChange={handleChange}
        />
        <div className="flex gap-[10px] items-center">
          <div className="h-[50px] w-[50px]">
            <label htmlFor="pict-input">
            <img
              src={attach}
              alt="attach"
              className=" h-[48px] w-[48px] cursor-pointer"
            />
            </label>
            <input name="pict-input" type="file" className="hidden" accept="image/*" />
          </div>
          <div>
            <button className="h-[50px] w-[50px] appearance-none" type="submit">
              <img
                src={sndimg}
                alt="Send"
                className=" h-[48px] w-[48px] cursor-pointer"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputMessage;
