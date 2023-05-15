import React from "react";
import { useDescope, useUser } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';


function Profile() {
    const { user } = useUser()
    const { logout } = useDescope()

    const sessionToken = getSessionToken(); // get the session token

    fetch('/validate_session', { // call the api endpoint from the flask server
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
