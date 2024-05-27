import { useState } from "react";

const RangeSlider = (props) => {
    const [rangew, setRangeW] = useState("50");
    const handleChange = (e) => {
        e.preventDefault();
        setRangeW(e.target.value);
        props.setValue(rangew)
    }

    return(
        <div className="relative flex items-center py-[13px]">
                <input type="range" className=" slider outline-none appearance-none h-[5px] w-full bg-p_cyan rounded-full" onChange={handleChange}/>
        </div>
    )
}

export default RangeSlider;