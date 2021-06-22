import React from 'react'
import * as headerStyles from './header.module.css'

export default function Header() {
    return (
        <div className={headerStyles.navbar}>
            <h1>Carelog</h1>
            {/* import persons name and pass it down from layout */}
        </div>
    )
}
