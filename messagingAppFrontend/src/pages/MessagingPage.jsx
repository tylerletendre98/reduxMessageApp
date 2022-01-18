import React from 'react'
import DisplayUser from '../components/DisplayUser'
import DisplayMessage from '../components/displayMessage'
import CreateNewMessage from '../components/createNewMessage'
import LogoutButton from '../components/logoutButton'
import {Link} from 'react-router-dom'

function MessagingPage() {
    return (
        <div>
            <div>
                <DisplayUser />
                <DisplayMessage />
                <CreateNewMessage />
                <Link to="/">
                    <LogoutButton />
                </Link>
            </div>
        </div>
    )
}

export default MessagingPage
