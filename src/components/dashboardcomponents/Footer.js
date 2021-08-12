import React from 'react'
import * as headerStyles from './header.module.css'
import { Link } from 'react-router-dom'


export default function Footer({ handleLogout }) {
    return (
        <div className={headerStyles.footerContainer}>
            <Link to="/update-profile">Update Profile</Link>
            <p onClick={handleLogout}>logout</p>
        </div>
    )
}
