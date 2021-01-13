const auth = {
    isLoggedIn: (req,res,next)=> {
        if (req.isAuthenticated()){
            next()
        } else {
            res.redirect('/api/users/unauthorized')
        }
    },

    logoutUser: (req,res,next)=> {
        if(req.isAuthenticated()){
            console.log('logged out')
            req.logout();
            next()
        } else {
            next()
        }
    },

    isAdmin: (req,res,next) => {
        if (req.isAuthenticated()){
console.log('user has been confirmed')
if (req.user.admin){
    console.log('administrator confirmed')
    next()
} else {
    console.log('need to be an administrator to continue')
    res.redirect('/api/users/unauthorized')
}
} else {
    res.redirect('api/users/unauthorized')
}
        }
    }
module.exports=auth