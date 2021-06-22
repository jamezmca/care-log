import React, { useRef, useState } from 'react'
import * as signupStyles from './signup.module.css'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
//temp-mail.org

//can also do export default function login() {} instead of the rafce
const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword /*,  currentUser*/ } = useAuth() // currentUser has a bunch of user info details
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <div className={signupStyles.container}>
            <div className={signupStyles.content}>
                <h2>Password Reset</h2>
                {error && <h2>{error}</h2>}
                {message && <h2>{message}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} required />
                    </div>
                    <button disabled={loading} type="submit">Reset Password</button>
                </form>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div className={signupStyles.login}>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default ForgotPassword
