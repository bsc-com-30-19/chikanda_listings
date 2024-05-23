import OwnerDeets from "./ownerdeets";
import Review from "./review";

const SideBar = () =>{
    return(
        <div className="flex basis-[30%]">
            <div className="my-[15px] w-full mr-[15px] flex flex-col gap-[20px]">
                <OwnerDeets />
                <Review />
            </div>
        </div>
    )
}

export default SideBar;