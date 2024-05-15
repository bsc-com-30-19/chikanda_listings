
const Login = () =>{
    return (
        <div className="h-screen flex w-screen items-center"> 
            <div className="bg-p_blue_d h-[300px] w-[500px] m-auto rounded-[25px] overflow-clip "> 
                <div className="bg-p_cyan h-[50px] w-auto">
                    <h1 className=" font-bold leading-[50px] text-center text-p_lave">
                        LOG IN
                    </h1>
                </div>
                <form>
                    <div className=" gap-x-40">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" placeholder="Enter email" />
                    </div>
                    <div>
                        <label htmlFor="pass">Password</label>
                        <input type="text" name="pass" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="bg-p_cyan rounded-full"> 
                        <h1 className="py-[5px] px-[15px] "> 
                            Log in
                        </h1>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;