const UserMessage = (props) =>{
    return (
        <li id={props.id}>
        <div className="flex gap-[20px] float-right">
            
            <div className="flex flex-col max-w-[80%] gap-[10px]">
                <p className=" px-[20px] py-[5px] rounded-[10px] max-w-max bg-indigo-400">{props.text}</p>
                {/* <img src={pfp} alt='profile pic' className=" h-auto w-[100px]"/> */}
            </div>
            <div className="flex-col mb-[30px]">
                <span>Just now</span>
            </div>
        </div>
        </li>
    )
}

export default UserMessage;