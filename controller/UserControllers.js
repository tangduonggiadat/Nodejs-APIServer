var UserService = require("../services/UserService")

exports.login = async function login(username, password) {
    return await UserService.login(username, password)
}