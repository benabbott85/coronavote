import React, { Component} from "react";
import GoogleLogout from "react-google-login"


export class GoogleOut extends Component {
responseGoogle=(response)=> {
    console.log(response)
    console.log(response.profileObj)
}


render (logout){
    return (
        <div>
            <GoogleLogout
            clientId="1031730455048-2g7ag9b7gkf3a0r943s8s54etmp50nfl.apps.googleusercontent.com"
            buttonText="Logout"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            onLogoutSuccess={logout}

            
            
            />
        </div>
    )
}
}


export default GoogleOut