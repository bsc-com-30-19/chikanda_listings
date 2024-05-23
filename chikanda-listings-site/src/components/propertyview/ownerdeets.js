import girl from "../../assets/img/avatargirl.jpg";
import messageico from "../../assets/icons/messageicocy.png";

const OwnerDeets = () => {
  return (
    <div className="bg-p_lave p-[15px] rounded-[25px] flex flex-col gap-[20px] text-[24px] font-bold">
      
      <div className=" inline-flex text-[28px]">
        <img
          className="w-[45px] h-[45px] rounded-full"
          src={girl}
          alt="avatar"
        />
        <h1 className="leading-[45px] pl-[15px] text-center ">Agatha Fears</h1>
      </div>

      <div className="inline-flex cursor-pointer px-[15px] w-fit">
        <h1 className="leading-[80px]">Message</h1>
        <img src={messageico} alt="message" className="h-[80px] w-[80px]" />
      </div>

      <button className="bg-p_colu w-fit p-[15px] rounded-[15px]">
        <h1>View my other Hostels</h1>
      </button>

      <div className="bg-p_colu p-[15px] rounded-[15px]">
        <h1>Contact me:</h1>
        <h1>janedoe@email.com</h1>
        <h1>+265990095665</h1>
      </div>

    </div>
  );
};

export default OwnerDeets;
