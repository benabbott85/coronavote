const passport = require ("passport")
const LocalStrategy = require ("passport-local").Strategy
const db = require ("../models")

passport.use(new LocalStrategy(
    function (username, password, done){
        db.User.findOne ({
            username: username
        }, function (err,user){
            if (err){
                return done (err)
            
            }else if (!user){
                return done (null, false, {message: "No user found with that username"})
            } else {
                return done (null, user)
            }
        
        })
    }
))

passport.serializeUser(function (user,done){
    done (null, user.id)
})

passport.deserializeUser(function (id,done){
    db.User.findById(id, function(err,user){
        done(err,user)
    })
})


module.exports=passport