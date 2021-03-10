import React, { Component} from "react";
import GoogleLogin from "react-google-login"
import "../stylesheets/glogin.css"

export class App extends Component {
    responseGoogle=(response)=> {
        console.log(response);
        console.log(response.profileObj)
    }
render (){
    return (
        <div>
            <GoogleLogin
            className ="glogin"
            clientId="1031730455048-2g7ag9b7gkf3a0r943s8s54etmp50nfl.apps.googleusercontent.com"
            buttonText="Login"
           onSuccess={this.responseGoogle}
           onFailure={this.responseGoogle}
           cookiePolicy={'single_host_origin'} 
            
            />
        {/* <GoogleLogout
        clientId="1031730455048-2g7ag9b7gkf3a0r943s8s54etmp50nfl.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
        >

        </GoogleLogout> */}
        


        </div>
    )
}
}

export default App