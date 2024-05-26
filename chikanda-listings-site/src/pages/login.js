import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const user = {email: "janedoe@jane.com", pass:"12345678"};

const Login = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState:{errors, isSubmitting} } = useForm();

  const onSubmit = (data) => {
    try {
      if (data.email === user.email && data.password === user.pass) {
        navigate('/'); 
      } else {
        throw new Error();
      }
    } catch (error) {
      setError("password", {
        message: "Wrong email or password"
      });
    }
  };

  return (
    <div className="h-screen flex w-screen items-center bg-p_lave">
      <div className="bg-p_blue_d  w-[500px] m-auto rounded-[25px] overflow-clip ">
        <div className="bg-p_cyan h-[50px] w-auto">
          <h1 className=" font-bold leading-[50px] text-center text-p_lave text-[32px]">
            LOG IN
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
                {...register("email", {required: "Email is required", 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }})}
                type="text"
                placeholder="Enter Email"
                name="email"
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
                {...register("password", {required: "Password is required"})}
                type="password"
                placeholder="Enter Password"
                name="password"
              />
            </div>
          </div>
          <p className="text-red-500 font-semibold">{errors.password?.message}</p>
          <div className=" after:content-[''] after:table after:clear-both mt-[15px]">
            <button
              disabled ={isSubmitting}
              type="submit"
              className="bg-p_cyan rounded-full float-right"
            >
              <h1 className="py-[5px] px-[15px] "> {isSubmitting ? "Verifying" : "Log in"}</h1>
            </button>
          </div>
        </form>
        <div className="px-[30px] mb-[20px]">
          <Link className="underline text-p_cyan block">Forgot Password?</Link>
          <Link className="underline text-p_cyan block" to="/signup">
            Don't have an account? Create one here!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
