import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <form onSubmit={register} className='border p-4'>
            <h3 className='mb-3'>Register</h3>
            <div>
                {"firstName" in error && (<div id="firstNameErr" className="form-text" style={{ color: 'red' }}>{error.firstName.message} </div>)}
                <div className="mb-3 form-floating">
                    <input
                        type="text" className="form-control mt-2" id="firstName" aria-describedby="firstNameErr" placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor="firstName" >First Name</label>
                </div>
            </div>

            <div>
                {"lastName" in error && (<div id="lastNameErr" className="form-text" style={{ color: 'red' }}>{error.lastName.message} </div>)}
                <div className="mb-3 form-floating">
                    <input
                        type="text" className="form-control mt-2" id="lastName" aria-describedby="lastNameErr" placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <label htmlFor="lastName" >Last Name</label>
                </div>
            </div>

            <div>
                {"email" in error && (<div id="emailErr" className="form-text" style={{ color: 'red' }}>{error.email.message} </div>)}
                <div className="mb-3 form-floating">
                    <input
                        type="text" className="form-control mt-2" id="email" aria-describedby="emailErr" placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor="email" >Email</label>
                </div>
            </div>

            <div>
                {"password" in error && (<div id="passwordErr" className="form-text" style={{ color: 'red' }}>{error.password.message} </div>)}
                <div className="mb-3 form-floating">
                    <input
                        type="password" className="form-control mt-2" id="password" aria-describedby="passwordErr" placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <label htmlFor="password" >Password</label>
                </div>
            </div>

            <div>
                {"confirmPassword" in error && (<div id="passwordErr" className="form-text" style={{ color: 'red' }}>{error.confirmPassword.message} </div>)}
                <div className="mb-3 form-floating">
                    <input
                        type="password" className="form-control mt-2" id="confirm" placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <label htmlFor="confirm" >Confirm Password</label>
                </div>
            </div>

            <button type="submit" className="btn btn-success">Register</button>
        </form>
    )
}

export default RegForm