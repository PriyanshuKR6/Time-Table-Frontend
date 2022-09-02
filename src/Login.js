import { Outlet, Link } from "react-router-dom";
export const Login = () => {
    return (<>
        <div className="container">
            <h2>Login</h2>
            <section className="log-in">
                <form>
                <p>Name <input type="text" name="name" placeholder="Enter username or email" required/></p>
                <p>Password <input type="password" name="password" placeholder="Enter your password" required/></p>
                <input type="submit" value="Login"/>
                </form>
                <h4>Don't have an account ? <Link to="/Register"><em>Register</em></Link></h4>
            </section>
        </div>
    </>)
}