import { Outlet, Link } from "react-router-dom";
export const Login = () => {
    return (<>
        <div className="log-in-container">
            <h2>Login</h2>
            <section className="log-in">
                <form className="log-in-form">
                    <div><p>Username or email </p><input type="text" name="name" placeholder="Enter username or email" required /></div>
                    <div><p>Password </p><input type="password" name="password" placeholder="Enter your password" required /></div>
                    <input type="submit" value="Login" />
                    <h4>Don't have an account ? <Link to="/Register"><em>Register</em></Link></h4>
                </form>
            </section>
        </div>
    </>)
}