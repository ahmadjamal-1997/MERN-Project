import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

            <div>

                <div className="mb-3 form-floating">
                    <input
                        type="text" className="form-control mt-2" id="loginEmail" placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="loginEmail" >Email</label>
                </div>
            </div>

            <div>

                <div className="mb-3 form-floating">
                    <input
                        type="password" className="form-control mt-2" id="loginPassword" placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <label htmlFor="loginPassword" >Password</label>
                    {error && (<span style={{ color: 'red' }} > {error} </span>)}
                </div>
            </div>

            <button type="submit" className="btn btn-success">Login</button>
        </form>

    )
}

export default LoginForm