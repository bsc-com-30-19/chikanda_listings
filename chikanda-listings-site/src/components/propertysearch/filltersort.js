import { useState } from "react";
import RangeSlider from "./rangeslder";


const FillterSort= () =>{
    
    const [budget, setBudget] = useState("500000Mk");
    const [peeps, setPeeps] = useState(5);

    const HandleBudget = (value) => {
        setBudget(((value/100) * 1000000) + "Mk");
    }

    const HandlePeeps = (value) => {
        setPeeps(Math.ceil((value/100) * 10))
    }

    return(<div>
        <div className="bg-p_cyan text-[32px] font-bold text-center ">
            <h1 className="">Fillter and Sort</h1>
            
        </div>
        <div className="font-bold text-[24px] px-[20px]">
                <h1>Budget(per month):</h1>
                <RangeSlider setValue={HandleBudget}/>
                <h2 className="mb-[20px]">1Mk~{budget}</h2>
                <h1>No of people per room:</h1>
                <RangeSlider setValue={HandlePeeps}/>
                <h2 className="mb-[20px]">1~{peeps}</h2>
                <h1>Sort By</h1>

                <select>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>)
}
export default FillterSort;