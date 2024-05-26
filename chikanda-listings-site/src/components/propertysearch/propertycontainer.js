import { Link } from "react-router-dom";
import house from "../../assets/img/house.jpg";
import fico from "../../assets/icons/female.png"
import mico from "../../assets/icons/male.png"

 const PropertyContainer = () =>{
    return(
    <Link to="/propview">
    <div className="h-[200px] w-[250px] rounded-[15px] overflow-clip bg-p_lave m-[5px] inline-block">
        <div className="h-[70%] overflow-clip">
            <img src={house} alt="house" className="object-cover"/>
        </div>
        <div className=" w-full px-[5px] inline-flex justify-between items-center"> 
            <h1 className=" leading-[60px] font-bold text-[20px]">300000 <span className=" leading-[60px] text-[16px]">MK/month</span></h1>
            <div className="inline-flex gap-[10px]">
                <img src={fico} alt="female icon" className="w-[30px] h-[30px]"/>
                <img src={mico} alt="male icon" className="w-[30px] h-[30px]"/>
            </div>
        </div>
    </div>
    </Link>
    )
 }

 export default PropertyContainer;