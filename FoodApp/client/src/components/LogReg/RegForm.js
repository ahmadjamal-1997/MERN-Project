import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const RegForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState({});//back end error

    const navigate = useNavigate()

    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            firstName, lastName, email, password, confirmPassword
        }, { withCredentials: true })
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch((err) => {
                console.log(err.response);
                setError(err.response.data.errors);
            });
    }

    return (
        <form onSubmit={register}>
            <h3 className='mb-3'>Register</h3>
            <div className='my-3'>
                <TextField label="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} variant="outlined"color={"firstName" in error ? 'warning': 'success'} focused/>
                {"firstName" in error && (<div className="form-text" style={{ color: 'red' }}>{error.firstName.message} </div>)}
            </div>
            <div className='my-3'>
                <TextField label="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} variant="outlined"color={"lastName" in error ? 'warning': 'success'} focused/>
                {"lastName" in error && (<div className="form-text" style={{ color: 'red' }}>{error.lastName.message} </div>)}
            </div>

            <div className='my-3'>
                <TextField label="email" onChange={(e) => setEmail(e.target.value)} value={email} variant="outlined" color={"email" in error ? 'warning': 'success'} focused/>
                {"email" in error && (<div id="emailErr" className="form-text" style={{ color: 'red' }}>{error.email.message} </div>)}
            </div>

            <div className='my-3'>
                <TextField label="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} variant="outlined" color={"password" in error ? 'warning': 'success'} focused/>
                {"password" in error && (<div id="passwordErr" className="form-text" style={{ color: 'red' }}>{error.password.message} </div>)}
            </div>

            <div className='mb-3'>
                <TextField label="confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} variant="outlined" color={"confirmPassword" in error ? 'warning': 'success'} focused/>
                {"confirmPassword" in error && (<div id="passwordErr" className="form-text" style={{ color: 'red' }}>{error.confirmPassword.message} </div>)}   
            </div>
            <button type="submit" className="btn btn-success">Register</button>
        </form>

    )
}

export default RegForm