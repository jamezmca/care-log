import React, { useRef, useState } from 'react'
import * as signupStyles from './signup.module.css'
import { useAuth } from '../contexts/AuthContext'

const Signup = () => {
    const passwordConfirmRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <div>
            <div>
                <h2>Sign Up</h2>
                {error && <h2>{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} required />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" ref={passwordRef} required />
                    </div>
                    <div>
                        <label for="password-confirm">Password Confirmation</label>
                        <input type="password" id="password-confirmation" name="password-confirmation" ref={passwordConfirmRef} required />
                    </div>
                    <button disabled={loading} type="submit">Sign Up</button>
                </form>
            </div>
            <div className={signupStyles.login}>

            </div>
        </div>
    )
}

export default Signup
