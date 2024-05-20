import Description from "./description";
import Details from "./Details";
import PropertyImges from "./propertyimgs";

const MainBar = () => {
  return (
    <div className="flex basis-[70%]">
      <div className=" m-[15px] rounded-[25px] bg-p_lave w-full">
        <div className="m-[15px]">
          <PropertyImges />
          <Details />
          <Description />
          <div className="mt-[10px]">
            <div className="flex justify-end">
              <button className="bg-p_cyan rounded-[15px] hover:bg-cyan-900">
                <h1 className=" font-medium text-p_lave text-[24px] py-[5px] px-[30px] ">
                  Request Booking!
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
