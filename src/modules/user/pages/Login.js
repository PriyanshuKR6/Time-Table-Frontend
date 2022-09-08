import { Link, useNavigate, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { API_CLIENT } from '../../../shared/services/api_client';
import { API } from "../../../config/app-constants";
import { Token } from "../../../shared/services/Token";


export const Login = (props, { setToken }) => {
    const idValue = useRef("")
    const pwdValue = useRef("")
    const [state, setState] = useState("")
    const [flag, setFlag] = useState(false);
    const [message, setMessage] = useState('');



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
    const navigate = useNavigate();
    const doLogin = async () => {
        console.log("Login Running");
        const result = await API_CLIENT.post(API.USER.LOGIN, {
            'userid': idValue.current,
            'password': pwdValue.current
        }).then((res) => {
            setFlag(true);
            Token.setToken(res.userid);
            console.log(result.data.message);
            console.log(flag);
        }).catch((err) => {
            console.log(err);
        })

    }
    return (<>
        {flag ? <Navigate to="/dashboard" replace /> : null}
        <div className="log-in-container">
            <h2>Login</h2>
            <section className="log-in">
                <form onSubmit={(e) => { e.preventDefault() }} className="log-in-form">
                    <div><p>Username or email </p><input type="text" value={idValue.current} placeholder="Enter username or email" onChange={handleChange} required /></div>
                    <div><p>Password </p><input type="password" value={pwdValue.current} placeholder="Enter your password" onChange={handleChange} required /></div>
                    <input type="submit" value="Login" onClick={doLogin} />
                    <h4>Don't have an account ? <Link to="/register"><em>Register</em></Link></h4>
                </form>
            </section>
        </div>
    </>)
}
