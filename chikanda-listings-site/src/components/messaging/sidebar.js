import Chats from "./chats";
import Search from "./search";
const Sidebar = () =>{
    return (
        <div className="flex-[1] bg-p_colu ">
            <div className="h-[50px] bg-[#15A8D5] items-center border-r border-gray-400">
                <h1 className="font-bold text-xl leading-[50px] px-[5px]">Message</h1>
            </div>
            <Search />
            <Chats />
            sidebar
        </div>
    )
}

export default Sidebar;