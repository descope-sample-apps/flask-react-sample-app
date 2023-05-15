import React from "react";
import { useDescope, useUser } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';



function Profile() {
    const { user, isUserLoading } = useUser()
    const { logout } = useDescope()

    const sessionToken = getSessionToken();

    fetch('/validate_session', {
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + sessionToken,
        }
    })

    return (
        <>
            {user && (
                <div>
                    <p>Hello {user.name}</p>
                    <div>My Private Component</div>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </>
    )
}


export default Profile;
