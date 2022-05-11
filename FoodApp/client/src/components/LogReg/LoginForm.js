import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");//back end error

    const navigate = useNavigate()


    const login = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch((err) => {
                console.log(err.response);
                setError("Invalid email or password");
            });
    }

    return (
        <form onSubmit={login} className='border p-4' >
            <h3 className='mb-4'>Login</h3>
            
            <div className='my-3'>
                <TextField label="email" onChange={(e) => setEmail(e.target.value)} value={email} variant="outlined" color={ error ? 'warning': 'success'} focused/>
            </div>

            <div>
            <div className='mt-4'>
                <TextField label="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} variant="outlined" color={ error ? 'warning': 'success'} focused/>
            </div>
                {error && (<span style={{ color: 'red' }} > {error} </span>)}
            </div>
            <button type="submit" className="btn btn-success mt-3">Login</button>
        </form>

    )
}

export default LoginForm