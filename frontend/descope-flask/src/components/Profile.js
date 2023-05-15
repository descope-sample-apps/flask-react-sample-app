import { useState } from "react";
import { useDescope, useUser } from '@descope/react-sdk'
import { getSessionToken } from '@descope/react-sdk';


function Profile() {
    const { user } = useUser()
    const { logout } = useDescope()
    const [secret, setSecret] = useState("")

    const sessionToken = getSessionToken(); // get the session token

    fetch('/validate_session', { // call the api endpoint from the flask server
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + sessionToken,
        }
    }).then(data => {
        return data.json()
    }).then(jsonData => {
        setSecret(jsonData.secretMessage)
    });

    return (
        <>
            {user && (
                <div>
                    <h1>Hello {user.name} 👋</h1>
                    <div>My Private Component</div>
                    <p>Secret Message: <span style={{ padding: "5px 10px", color: "white", backgroundColor: "black"}}>{secret}</span></p>
                    <button 
                    style={{ border: "None", backgroundColor: "#00BD67", padding: "15px 25px", color: "white", fontSize: "1.1em", borderRadius: "9px", marginTop: "12px" }} 
                    onClick={logout}>Logout</button>
                </div>
            )}
        </>
    )
}


export default Profile;
