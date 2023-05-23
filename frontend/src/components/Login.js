import React from "react";
import { useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import Profile from "./Profile";


function Login() {
    // isAuthenticated: boolean - is the user authenticated?
    // isSessionLoading: boolean - Use this for showing loading screens while objects are being loaded
    const { isAuthenticated, isSessionLoading } = useSession()
    // isUserLoading: boolean - Use this for showing loading screens while objects are being loaded
    const { isUserLoading } = useUser()

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {
                (isSessionLoading || isUserLoading) && <p>Loading...</p>
            }

            {isAuthenticated &&
                (
                    <Profile /> // render component
                )
            }

            {!isAuthenticated &&
                (
                    <>
                        <h1 style={{ fontSize: "2em", marginTop: "10vh" }}>Login/SignUp to see the Secret Message!</h1>
                        <Descope
                            flowId="sign-up-or-in" 
                            onSuccess = {(e) => console.log(e.detail.user)}
                            onError={(e) => console.log('Could not log in!')}
                            theme="light"
                        />
                    </>
                )
            }
        </div>
    )
}


export default Login;
