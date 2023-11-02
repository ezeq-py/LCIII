import React, { useState } from 'react'
import { useNavigate } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({ isLoggedInHandler }) => {
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    const onChangeUserHandler = (event) => {
        setUser(event.target.value);
        const userStringArray = user.split("");

        if (userStringArray.includes("o") || userStringArray.includes("O")) {
            alert("no me guta la letra o")
        }
    }

    const onClickRegisterHandler = (event) => {
        event.preventDefault();
        const userStringArray = user.split("");

        if (userStringArray.includes("o") || userStringArray.includes("O") || userStringArray.length === 0) {
            alert("Usuario inválido para registrarse")
            return;
        }

        isLoggedInHandler(true)
        setUser("");
        navigate("/home");
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Form className='w-25 border rounded p-4'>
                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="User" onChange={onChangeUserHandler}/>
                    <Form.Text className="text-muted">
                        {user}
                    </Form.Text>
                </Form.Group>

                
                <Button variant="primary" type="submit" onClick={onClickRegisterHandler}>
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    )
}

export default Login