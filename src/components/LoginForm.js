import React from 'react'
import Input from './Input'
import {Link} from 'react-router-dom'
// import SubmitButton from './SubmitButton'

const LoginForm = () => {
    return (
        <div className="d-flex login-form">
            <form>
                <Input type="email" required="true" label="Email"/>
                <Input type="password" required="true" label="Password"/>
                <p  className="forgot-pass"><Link className="forgot-pass-link">Forgot password?</Link></p>
                <input type="submit" id="login" value="Login"/>
                <p className="signup">Not registered? < Link to="/register" className="sign-up-link">Sign Up </Link></p>
            </form>

        </div>
    )
}

export default LoginForm