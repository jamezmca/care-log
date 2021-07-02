import React from 'react'
import * as headerStyles from './header.module.css'
//i actually think i want it to be a tab bar on the left that opens and closes and pushes content to the left with icons and
//basically logout functionality and settings etc and then the profile information and update can be accessed in a modal from here

export default function Header() {
    return (
        <div className={headerStyles.navbar}>
            {/* import persons name and pass it down from layout or make it a text input*/}
        </div>
    )
}
