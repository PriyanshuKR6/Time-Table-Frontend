import { Link, Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { API_CLIENT } from '../../../shared/services/api_client';
import { API } from "../../../config/app-constants";

export const Register = () => {
    const nameValue = useRef("")
    const pwdValue = useRef("")
    const [state, setState] = useState("")
    const [flag, setFlag] = useState(false);

    const handleChange = (e) => {
        if (e.target.type === "text") {
            nameValue.current = e.target.value;
            setState(state + 1);
        }
        else
            if (e.target.type === "password") {
                pwdValue.current = e.target.value;
                setState(state + 1);
            }
    }

    const doRegister = async () => {
        console.log("Register Running");
        const result = await API_CLIENT.post(API.USER.REGISTER, {
            'userid': nameValue.current,
            'password': pwdValue.current
        }).then((res) => {
            setFlag(true);
            sessionStorage.setItem('token', res.data._id);
            console.log(result.data.message);
            console.log(flag);
        }).catch((err) => {
            console.log(err);
        })

    }
    return (<>
        {flag ? <Navigate to="/dashboard" replace /> : null}

        <div className="sign-up-container">
            <h2>Register</h2>
            <section className="sign-up">
                <form onSubmit={(e) => { e.preventDefault() }} className="sign-up-form">
                    <p>Name <input type="text" value={nameValue.current} placeholder="Enter your name" onChange={handleChange} required /></p>
                    <p>Password <input type="password" value={pwdValue.current} placeholder="Choose your password" onChange={handleChange} required /></p>
                    <input type="submit" value="Regsiter" onClick={doRegister} />
                    <h4>Already have an account ? <Link to="/Login"><em>Login</em></Link></h4>
                </form>
            </section>
        </div>
    </>)
}