
const ReviewRow = (props) => {
    return(
        <div className=" after:content-[''] after:table after:clear-both ">
                    <div className=" float-left w-[25%]">{props.num}</div>
                    <div className="w-[75%] float-left mt-[8px]">
                        <div className="w-full text-center text-transparent bg-gray-500">
                        <div className={`h-[10px] ${props.width} bg-p_cyan`}></div>
                        </div>
                    </div>
                </div>
    );
}

export default ReviewRow;