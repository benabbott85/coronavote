var bcrypt = require ("bcyrptjs");

module.exports = function (sequelize, DataTypes){
    var User = sequelize.define ("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        social: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true
        }
    })
    User.prototype.validPassword = function (password){
        return bcrypt.compareSync(password, this.password);
    }

    User.addHook("beforeCreate", function(user){
        user.password= bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    })
}