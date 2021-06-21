import React, { useRef, useState } from 'react'
import * as signupStyles from './signup.module.css'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


//can also do export default function login() {} instead of the rafce
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login /*,  currentUser*/ } = useAuth() // currentUser has a bunch of user info details
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            history.push('/')
        } catch {
            setError('Failed to log in')
        }
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
                {error && <h2>{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" ref={passwordRef} required />
                    </div>
                    <button disabled={loading} type="submit">Login</button>
                </form>
                <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
            <div className={signupStyles.login}>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login
