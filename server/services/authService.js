require('dotenv').config()

const validateToken = (token) => {
    try {
        const data = jwt.verify(token, process.env.SECRET_KEY)
        return data
    } catch (error) {
        throw new Error('Invalid cookie token!')
    }
}
module.exports = {
    validateToken
}