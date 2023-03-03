require('dotenv').config()
const jwt = require('jsonwebtoken')
const validateToken = (token) => {
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY)
        return data
    } catch (error) {
        throw new Error('Invalid cookie token!')
    }
}
const createAccessToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email,
        phone: user.phone,
        username: user.username,
    }
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY)
    return {
        email: user.email,
        username: user.username,
        phone: user.phone,
        accessToken,
        _id: user._id
    };
}
module.exports = {
    createAccessToken,
    validateToken
}