import React from 'react'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

const LogReg = () => {
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-5 me-5'>
                    <RegForm />
                </div>
                <div className='col-md-5'>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LogReg