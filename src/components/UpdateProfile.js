import React, { useRef, useState } from 'react'
import * as signupStyles from './signup.module.css'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const UpdateProfile = () => {
    const passwordConfirmRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, updatePassword, updateEmail /*,  currentUser*/ } = useAuth() // currentUser has a bunch of user info details
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <div className={signupStyles.container}>
            <div className={signupStyles.content}>
                <h2>Update Profile</h2>
                {error && <h2>{error}</h2>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" ref={emailRef} required defaultValue={currentUser.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                    </div>
                    <div>
                        <label htmlFor="password-confirm">Password Confirmation</label>
                        <input type="password" id="password-confirmation" name="password-confirmation" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                    </div>
                    <button disabled={loading} type="submit">Update</button>
                </form>
            </div>
            <div className={signupStyles.login}>
                <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}

export default UpdateProfile
