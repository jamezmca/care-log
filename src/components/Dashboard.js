import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import DashboardContent from './dashboardcomponents/DashboardContent'
import Layout from './dashboardcomponents/Layout'

const Dashboard = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        } catch (error) {
            setError('Failed to logout')

        }
    }

    return (
        <Layout>
            <div>
                <div>
                    <h2>Profile</h2>
                    {error && <h2>{error}</h2>}
                    <strong>Email: {currentUser.email}</strong>
                    <Link to="/update-profile">Update Profile</Link>
                </div>
            </div>
            <div><button onClick={handleLogout}>Logout</button></div>
            <DashboardContent/>
        </Layout>
    )
}

export default Dashboard
