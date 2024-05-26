 import { Link } from "react-router-dom";
import house from "../../../assets/img/house.jpg"

 const PropertyMngContainer = () =>{
    return(
    <Link to="/propmanage">
    <div className="h-[200px] w-[250px] rounded-[15px] overflow-clip bg-p_lave m-[5px] inline-block">
        <div className="h-[70%] overflow-clip">
            <img src={house} alt="house" className="object-cover"/>
        </div>
        <div className="h-full px-[5px]"> 
            <h1 className=" leading-[60px] font-bold text-[20px]">300000 <span className="text-[16px]">MK/month</span></h1>
        </div>
    </div>
    </Link>
    )
 }

 export default PropertyMngContainer;