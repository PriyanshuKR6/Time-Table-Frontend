import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { API_CLIENT } from '../../../shared/services/api_client';

export const Register = () => {
    const nameValue = useRef("")
    const pwdValue = useRef("")
    const emailValue = useRef("");
    const [state, setState] = useState("")
    const handleChange = (e) => {
        if (e.target.type === "text") {
            nameValue.current = e.target.value;
            setState(state + 1);
        } else
            if (e.target.type === "email") {
                emailValue.current = e.target.value;
                setState(state + 1);
            }
            else
                if (e.target.type === "password") {
                    pwdValue.current = e.target.value;
                    setState(state + 1);
                }
    }
    const [message, setMessage] = useState('');

    const doRegister = async () => {
        console.log('Username ', nameValue.current,"email", emailValue.current, "Password ", pwdValue.current);
        const result = await API_CLIENT.post(process.env.REACT_APP_REGISTER, {
            'username': nameValue.current,
            'email': emailValue.current,
            'password': pwdValue.current
        });
        setMessage(result.data.message);
        console.log(message);
    }
    return (<>
        <div className="sign-up-container">
            <h2>Register</h2>
            <section className="sign-up">
                <form className="sign-up-form">
                    <p>Name <input type="text" value={nameValue.current} placeholder="Enter your name" onChange={handleChange} required /></p>
                    <p>Email <input type="email" value={emailValue.current} placeholder="Enter your email address" onChange={handleChange} required /></p>
                    <p>Password <input type="password" value={pwdValue.current} placeholder="Choose your password" onChange={handleChange} required /></p>
                    <input type="submit" value="Regsiter" onClick={doRegister}/>
                    <h4>Already have an account ? <Link to="/Login"><em>Login</em></Link></h4>
                </form>
            </section>
        </div>
    </>)
}