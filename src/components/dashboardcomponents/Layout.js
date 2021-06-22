import React from 'react'
import Footer from './Footer'
import Header from './Header'
import * as layoutStyles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={layoutStyles.container}>
            <div style={{ flex: 1, position: 'relative', paddingTop: '5px' }}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}
