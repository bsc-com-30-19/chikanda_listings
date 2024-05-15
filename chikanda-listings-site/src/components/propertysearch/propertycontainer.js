 import house from "../../assets/img/house.jpg"
 const PropertyContainer = () =>{
    return(
    <div className="h-[200px] w-[200px] border-[5px] border-red-600">
        <img src={house} alt="house" className="h-[70%] object-cover "/>
        <div className="h-full  "> 
        <   h1 className="">30 MK</h1>
        </div>
    </div>
    )
 }

 export default PropertyContainer;