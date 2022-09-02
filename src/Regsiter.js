import { Outlet, Link } from "react-router-dom";
export const Register = () => {
    return (<>
        <div className="container">
            <h2>Register</h2>
            <section className="sign-up">
                <form>
                <p>Name <input type="text" name="name" placeholder="Enter your name" required/></p>
                <p>Email <input type="email" name="email" placeholder="Enter your email address" required/></p>
                <p>Password <input type="password" name="password" placeholder="Choose your password" required/></p>
                <input type="submit" value="Regsiter"/>
                </form>
                <h4>Already have an account ? <Link to="/Login"><em>Login</em></Link></h4>
            </section>
        </div>
    </>)
}