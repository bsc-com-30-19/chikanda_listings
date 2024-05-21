import OwnerDeets from "./ownerdeets";

const SideBar = () =>{
    return(
        <div className="flex basis-[30%]">
            <div className="my-[15px] w-full mr-[15px]">
                <OwnerDeets />
            </div>
        </div>
    )
}

export default SideBar;