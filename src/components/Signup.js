import React, { useRef, useState } from 'react'
import * as signupStyles from './signup.module.css'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Signup = () => {
    const passwordConfirmRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup /*,  currentUser*/ } = useAuth() // currentUser has a bunch of user info details
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            setLoading(false)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
    }

    return (
        <div className={signupStyles.container}>
            <div className={signupStyles.content}>
                <h2>Sign Up</h2>
                {error && <h3>{error}</h3>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" ref={passwordRef} required />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">Password Confirmation</label>
                        <input type="password" id="password-confirmation" name="password-confirmation" ref={passwordConfirmRef} required />
                    </div>
                    <button disabled={loading} type="submit">Sign Up</button>
                </form>
            </div>
            <div className={signupStyles.login}>
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Signup
