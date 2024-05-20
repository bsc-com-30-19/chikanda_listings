import houseimg from "../../assets/img/house.jpg";
import dormimg from "../../assets/img/Dorm.jpeg";
import studentimg from "../../assets/img/studentsit.jpg";

const PropertyImges = () =>{
    return (
      <div className=" flex gap-[5px]">
        <div className="rounded-[5px] basis-1/2 h-[350px] w-[] overflow-clip">
          <img src={houseimg} alt="Property" className="h-[350px] w-auto" />
        </div>
        <div className="flex-col justify-between">
        <div className="">
          <div className="rounded-[5px] h-[150px] w-[150px] overflow-clip">
            <div className="h-full w-full">
              <img
                src={dormimg}
                alt="Property"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-[5px] h-[150px] w-[150px] overflow-clip">
            <div className="h-full w-full">
              <img
                src={studentimg}
                alt="Property"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default PropertyImges;