import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../stylesheets/auth.css"

const LoginButton =  () => {
    
    const { loginWithRedirect } = useAuth0();
    return (<button  onClick={() => loginWithRedirect()} id ="auth"> Log In </button>
    )
}

export default LoginButton
