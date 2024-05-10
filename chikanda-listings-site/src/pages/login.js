
const Login = () =>{
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder="Enter email" />
            <label htmlFor="pass">Password</label>
            <input type="text" name="pass" placeholder="Enter password" />
        </form>
    )
}

export default Login;