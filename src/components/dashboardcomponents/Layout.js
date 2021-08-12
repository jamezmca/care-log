import React from 'react'
import Footer from './Footer'
import * as layoutStyles from './layout.module.css'

export default function Layout({ children, handleLogout }) {
    return (
        <div className={layoutStyles.container}>
            <div style={{ flex: 1, position: 'relative', paddingTop: '5px' }}>
                {children}
            </div>
            <Footer handleLogout={handleLogout}/>
        </div>
    )
}
