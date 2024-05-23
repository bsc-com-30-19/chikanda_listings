
const Details = () =>{
    return(
    <div className="rounded-[25px] bg-p_colu my-[36px]">
        <div className="px-[36px] py-[30px]">
            <h1 className="font-bold text-[32px]">Property Details:</h1>
            <div className="pt-[25px] text-[22px] leading-[45px]">
                <h2 className="text-[25px] font-semibold">Rent Per Month:</h2>
                <p>XXXXXX MK</p>
                <h2 className="text-[25px] font-semibold">Allowed Sex</h2>
                <div className=" inline-flex">
                    <div>
                    <label htmlFor="male">Male</label>

                    <input type="checkbox" value="checked" name="male" disabled checked />
                    
                    </div>
                    <div>
                    <label htmlFor="female">Female</label>
                    <input type="checkbox" name="female" disabled></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Details;