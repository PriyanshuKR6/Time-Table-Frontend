import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { API_CLIENT } from '../../../shared/services/api_client';

export const Login = () => {
    const idValue = useRef("")
    const pwdValue = useRef("")
    const [state, setState] = useState("")
    const handleChange = (e) => {
        if (e.target.type === "text") {
            idValue.current = e.target.value;
            setState(state + 1);
        } else
            if (e.target.type === "password") {
                pwdValue.current = e.target.value;
                setState(state + 1);
            }
    }
    // const uid = useRef('');
    // uid.current = "amit";
    // const pwd = useRef('');
    // pwd.current = "amit";
    const [message, setMessage] = useState('');

    const doLogin = async () => {
        console.log('Userid ', idValue.current, "Password ", pwdValue.current);
        const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN, {
            'userid': idValue.current,
            'password': pwdValue.current
        });
        setMessage(result.data.message);
        console.log(message);
    }
    return (<>
        <div className="log-in-container">
            <h2>Login</h2>
            <section className="log-in">
                <form className="log-in-form">
                    <div><p>Username or email </p><input type="text"value={idValue.current} placeholder="Enter username or email" onChange={handleChange} required /></div>
                    <div><p>Password </p><input type="password" value={pwdValue.current} placeholder="Enter your password" onChange={handleChange} required /></div>
                    <input type="submit" value="Login" onClick={doLogin} />
                    <h4>Don't have an account ? <Link to="/Register"><em>Register</em></Link></h4>
                </form>
            </section>
        </div>
    </>)
}