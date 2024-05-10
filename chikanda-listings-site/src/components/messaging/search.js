import image from "../../assets/img/girl.png";

const Search = () =>{
    return (
        <div className="w-full border-b-[3px] border-slate-200 ">
            <div className="p-[5px]">
                <div className="p-[5px]">
                    <input type="text" className="border-none p-[5px] w-full bg-[#0E6BA8] outline-none text-p_lave" placeholder="Search for user" />
                </div>
                <div className="p-[10px] flex items-center gap-[10px] cursor-pointer hover:bg-gray-500">
                    <img src={image} alt='profile pic' className=" h-[50px] w-[50px] rounded-full object-cover"/>
                    <div>
                        <span className="text-xl font-semibold">Jane</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;