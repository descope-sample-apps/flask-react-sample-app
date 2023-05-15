import React from "react";
import { useDescope, useSession, useUser } from '@descope/react-sdk'
import { Descope } from '@descope/react-sdk'
import Profile from "./Profile";


function Login() {
    // isAuthenticated: boolean - is the user authenticated?
    // isSessionLoading: boolean - Use this for showing loading screens while objects are being loaded
    const { isAuthenticated, isSessionLoading } = useSession()

    // user: user object with all the user details such as email, name etc.
    // isUserLoading: boolean - Use this for showing loading screens while objects are being loaded
    const { user, isUserLoading } = useUser()

    // logout - call logout to logout the user (deletes all session state)
    const { logout } = useDescope()

    return (
        <>
            {/* <p>This is the data: {data.user}</p> */}
            {
            (isSessionLoading || isUserLoading) && <p>Loading...</p>
            }

            { isAuthenticated &&
                (
                    <Profile /> // render component
                )
            }

            { !isAuthenticated &&
            (
                <Descope
                    flowId="sign-up-or-in" // If you wish to use another flow, flow-id is shown in the console
                    onSuccess = {(e) => console.log(e.detail.user)}
                    onError={(e) => console.log('Could not log in!')}
                    theme="light" // "light" or "dark", default is "light"
                    //    debug=boolean // Shows a debug widget if true. Can be true or false, default is false.
                    //    tenant="<tenantId>" // Which tenant the auth flow will sign the user into
                />
            )
            }
        </>
    )
}


export default Login;
