import PropertyImges from "./propertyimgs";

const MainBar = () =>{
    return(
        <div className="flex  basis-[70%]">
            <div className=" m-[15px] bg-p_lave w-full">
                <div className="m-[15px]">
                <PropertyImges />
                </div>
            </div>
        </div>
    )
}

export default MainBar;