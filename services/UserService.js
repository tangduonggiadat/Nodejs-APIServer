var usermodel = require("../modles/UserModel")

exports.login = async function login(username, password) {
    return await usermodel.findOne({ username: username, password: password })
}