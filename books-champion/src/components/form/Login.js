import React, { useRef, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router';

const Login = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const emailChangeHandler = (event) => {
        emailRef.current.style.borderColor = "";
        emailRef.current.style.outline = "";
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        passwordRef.current.style.borderColor = "";
        passwordRef.current.style.outline = "";
        setPassword(event.target.value)
    }

    const signInClicked = () => {
        if (email.length === 0) { //valor que se encuentra en la referencia, ()s no sé por qué no funciona (lo cambie por estado por referencia sería emailRef.current.value.length)
            emailRef.current.focus(); //implementamos el foco y cambiamos el estilizado
            emailRef.current.style.borderColor = "red";
            emailRef.current.style.outline = "none";
            return;
        }

        if (password.length === 0) { //valor que se encuentra en el estado
            passwordRef.current.focus();
            passwordRef.current.style.borderColor = "red";
            passwordRef.current.style.outline = "none";

            return;
        }
        alert(`Hello! ${email} I am an alert box!! your password is ${password}`);

        onLogin(true);
        navigate("/home");
    }

    

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h4>¡Bienvenidos a Book Champions!</h4>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={emailChangeHandler}
                        placeholder='Email'
                        type='email'
                        ref={emailRef}
                    />
                    <p>{email.length === 0 ? "grega mial" : null}</p>
                </div>
                <div className='input-container'>
                    <input
                        className='input-control'
                        onChange={passwordChangeHandler}
                        placeholder='Password'
                        type='password'
                        ref={passwordRef}
                    />
                    <p>{password.length === 0 ? "grega pasword" : null}</p>
                </div>
                <button
                    onClick={signInClicked}
                    className='signin-button'
                    type='button'>
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}

export default Login