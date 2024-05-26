import houseimg from "../../assets/img/dorm_stuff/house.jpg";
import dormimg from "../../assets/img/dorm_stuff/Dorm.jpeg";
import studentimg from "../../assets/img/dorm_stuff/studentsit.jpg";

const PropertyImges = () =>{
    return (
      <div className=" inline-flex gap-[5px]">
        <div className="rounded-[5px] h-[350px] w-[75%] overflow-clip">
          <img src={houseimg} alt="Property" className="h-[350px] w-auto cover" />
        </div>
        <div className="flex-col justify-between">
        <div className="">
          <div className="rounded-[5px] h-[150px] w-[150px] mb-[50px] overflow-clip">
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