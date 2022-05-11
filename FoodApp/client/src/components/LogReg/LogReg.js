import React from 'react'
import LoginForm from './LoginForm'
import RegForm from './RegForm'

const LogReg = () => {
    return (
        <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"800px"}}>
            <div className='container' >
                <div className='row justify-content-center'>
                    <div className='col-md-5'></div>
                <div className="col-md-3 align-self-center p-4">
                    <RegForm />
                </div>
                <div className='col-md-3 align-self-center p-4'>
                    <LoginForm />
                </div>
            </div>
        </div>
    </div>
    )
}

export default LogReg