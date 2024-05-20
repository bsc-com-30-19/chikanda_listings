import FormInput from "../components/login/forminput.js";

const SignUp = () =>{
    return (
        <div className="h-screen flex w-screen items-center bg-p_lave"> 
            <div className="bg-p_blue_d h-[300px] w-[500px] m-auto rounded-[25px] overflow-clip "> 
                <div className="bg-p_cyan h-[50px] w-auto">
                    <h1 className=" font-bold leading-[50px] text-center text-p_lave">
                        Register
                    </h1>
                </div>
                <form className="px-[30px] mt-[40px]">
                    <FormInput text="Email" ptext="Enter email"/>
                    <FormInput text="Password" ptext="Enter Password"/>
                    <FormInput text="Re-enter Password" ptext="Re-enter password"/>
                    <div className=" after:content-[''] after:table after:clear-both mt-[15px]">
                        <button type="submit" className="bg-p_cyan rounded-full float-right"> 
                            <h1 className="py-[5px] px-[15px] "> Register </h1>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;