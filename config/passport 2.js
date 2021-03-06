var passport = require ("passport")
var LocalStrategy = require ("passport-local").Strategy

var db = require ("../models")

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },

    function (email,password, done){
        db.User.findOne({
            where: {
                email: email
            }
        }).then(function(dbUser){
            if (!dbUser){
                return done(null,false, {
                    message: "Email is incorrect, please try again."
                })
            }
            else if (!dbUser.validPassword(password)){
                return done (null, false, {
                    message: "Password is incorrect, please try again."
                })
            }
            return done (null, dbUser)
        })
    }
))

passport.serializeUser(function(user,cb){
    cb(null,user)
})

passport.serializeUser(function(obj,cb){
    cb(null,obj)
})

module.exports=passport