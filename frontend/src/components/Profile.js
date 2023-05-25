import '../App.css';
import { useState, useEffect } from "react";
import { useDescope, useUser, getSessionToken, useSession } from '@descope/react-sdk'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Profile() {
    const { isSessionLoading } = useSession()

    const { user } = useUser()
    const { logout } = useDescope()
    const navigate = useNavigate()

    const [secret, setSecret] = useState({
        secret: "",
        role: []
    })

    const sessionToken = getSessionToken(); // get the session token

    const logoutUser = async() => {
        await logout()
        return navigate('/login')
    }

    useEffect(() => {
        fetch('/get_roles', { // call the api endpoint from the flask server
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + sessionToken,
            }
        }).then(data => {
            if (data.status === 401) {
                navigate('/login')
            }
            return data.json()
        }).then(jsonData => {
            setSecret({
                secret: jsonData.secretMessage,
                role: jsonData.role
            })
        }).catch((err) => {
            console.log(err)
            navigate('/login')
        })
    }, [])

    return (
        <>  
            {user && (
                <div className='page profile'>
                    <div>
                        <h1 className='title'>Hello {user.name} 👋</h1>
                        <div>My Private Component</div>
                        <p>Secret Message: <span style={{ padding: "5px 10px", color: "white", backgroundColor: "black"}}>{secret.secret}</span></p>
                        <p>Your Role(s): </p>
                        {!secret.role || secret.role.length === 0 ? 
                            <p><span style={{ color: "green" }}>No role found!</span></p>
                            :
                            secret.role.map((role, i) => (
                                <p key={i}><span style={{ color: "green" }}>{role}</span></p>
                            ))
                        }
                        <Link className='link btn' to="/">Home</Link>
                        <Link className='link btn' to="/dashboard">Dashboard</Link>
                        <button className='btn' onClick={logoutUser}>Logout</button>        
                    </div>
                </div>
            )}
        </>
    )
}


export default Profile;
