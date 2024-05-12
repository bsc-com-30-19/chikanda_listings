import Chats from "./chats";
import Search from "./search";

const Sidebar = () =>{
    return (
        <div className="flex-[1] bg-[#37476a] border-r border-[#444a60] text-p_lave">
            <div className="h-[70px] bg-[#0E6BA8] items-center ">
                <h1 className="font-bold text-2xl leading-[70px] px-[30px]">Message</h1>
            </div>
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar;