import houseimg from "../../assets/img/house.jpg";
import dormimg from "../../assets/img/Dorm.jpeg";
import studentimg from "../../assets/img/studentsit.jpg";

const PropertyImges = () =>{
    return(
    <div className="h-[500px] flex">
        <div className="rounded-[5px] h-[350px] overflow-clip">
        <img src={houseimg} alt="Property" className="h-[350px] w-auto"/>
        </div>
        <div className="flex-col flex">
            <div className="h-[150px] w-[150px]">
            <img src={dormimg} alt="dorm" className="h-[150px] "/>
            </div>
            <div className="h-[150px] w-[150px]">
                <img src={studentimg} alt="Property" className="object-cover"/>
            </div>
        </div>
    </div>
    )
}

export default PropertyImges;