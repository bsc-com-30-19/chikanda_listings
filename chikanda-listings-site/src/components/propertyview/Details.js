
const Details = () =>{
    return(
    <div className="rounded-[25px] bg-p_colu my-[36px]">
        <div className="px-[36px] py-[30px]">
            <h1 className="font-bold text-[32px]">Property Details:</h1>
            <div className="pt-[25px] text-[28px] leading-[50px]">
                <h2>Rent Per Month:</h2>
                <p>XXXXXX MK</p>
                <h2>Allowed Sex</h2>
                <div className=" inline-flex">
                    <div>
                    <label htmlFor="male">Male</label>
                    <input type="checkbox" name="male"></input>
                    </div>
                    <div>
                    <label htmlFor="female">Female</label>
                    <input type="checkbox" name="female"></input>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Details;