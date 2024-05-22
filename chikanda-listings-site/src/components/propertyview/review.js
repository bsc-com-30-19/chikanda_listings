
import ReviewRow from "./reviewrow";

const Review = () =>{
    return(
        <div className="bg-p_lave p-[15px] rounded-[25px] flex flex-col gap-[20px]">
            <h1>Reviews</h1>
                <div>
                <ReviewRow num="5" width="w-[75%]" />
                <ReviewRow num="4" width="w-[15%]" />
                <ReviewRow num="3" width="w-[5%]" />
                <ReviewRow num="2" width="w-[5%]" />
                <ReviewRow num="1" width="w-[0%]" />
                </div>
        </div>
    );
}

export default Review;