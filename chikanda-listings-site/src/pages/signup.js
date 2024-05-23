import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const user = {email: "janedoe@jane.com", pass:"12345678"};

const SignUp = () => {

    const { register, handleSubmit, setError, formState:{errors, isSubmitting} } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) =>{
        try {
            if (data.email === user.email) {
                throw new TypeError("This email is already taken");
            }
            if (data.password !== data.re_enter){
                throw new TypeError("Password do not match")
            }
            navigate('/')
          } catch ({name, message}) {
            setError("re_enter", {
              message: message
            });
          }
    }

  return (
    <div className="h-screen flex w-screen items-center bg-p_lave">
      <div className="bg-p_blue_d w-[500px] m-auto rounded-[25px] overflow-clip ">
        <div className="bg-p_cyan h-[50px] w-auto">
          <h1 className=" font-bold leading-[50px] text-center text-p_lave text-[32px]">
            Register
          </h1>
        </div>

        <form className="px-[30px] mt-[40px]" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className=" after:content-[''] after:table after:clear-both mt-[15px] text-p_lave">
              <label htmlFor="email" className="w-[35%] float-left">
                Email
              </label>
              <input
                className="w-[65%] float-left rounded-[15px] border-none outline-none text-p_purp_d"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="text"
                placeholder="Enter Email"
              />
            </div>
          </div>
          <p className="text-red-500 font-semibold">{errors.email?.message}</p>

          <div>
            <div className=" after:content-[''] after:table after:clear-both mt-[15px] text-p_lave">
              <label htmlFor="password" className="w-[35%] float-left">
                Password
              </label>
              <input
                className="w-[65%] float-left rounded-[15px] border-none outline-none text-p_purp_d"
                {...register("password", {required: "Password is required", minLength: {
                    value:8,
                    message: "Minimum length is 8 characters"
                }})}
                type="text"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <p className="text-red-500 font-semibold">{errors.password?.message}</p>  
          
          <div>
            <div className=" after:content-[''] after:table after:clear-both mt-[15px] text-p_lave">
              <label htmlFor="re_enter" className="w-[35%] float-left">
                Re-enter password
              </label>
              <input
                className="w-[65%] float-left rounded-[15px] border-none outline-none text-p_purp_d"
                {...register("re_enter", {required: "Enter password again"})}
                type="text"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <p className="text-red-500 font-semibold">{errors.re_enter?.message}</p> 

          <div className=" after:content-[''] after:table after:clear-both mt-[15px]">
            <button
              disabled = {isSubmitting}
              type="submit"
              className="bg-p_cyan rounded-full float-right mb-[20px]"
            >
              <h1 className="py-[5px] px-[15px] ">  {isSubmitting ? "Verifying" : "Register"}</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
