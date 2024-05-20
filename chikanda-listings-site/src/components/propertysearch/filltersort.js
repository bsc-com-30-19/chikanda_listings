const FillterSort= () =>{
    return(<div>
        <div className="bg-p_cyan text-[32px] font-bold text-center ">
            <h1 className="">Fillter and Sort</h1>
            
        </div>
        <div className="font-bold text-[24px] px-[20px]">
                <h1>Budget(per month):</h1>
                <input type="range" />
                <h2>1Mk~50Mk</h2>
                <h1>No of people per room:</h1>
                <input type="range" />
                <h2>1~10</h2>
                <h1>Sort By</h1>

                <select>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
        </div>)
}
export default FillterSort;