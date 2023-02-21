// const { validateToken } = require("../services/user");

const authMiddleware = (req, res, next) => {
    // const token = req.headers['x-authorization']; -- Storing in local storage
    const cookie = req.cookies?.auth;
    if(cookie != 'none' && cookie != undefined){
        try {
            // const user = validateToken(cookie); -- TO DO 
            const user = null;
            req.user = {
                'email': user.email,
                'username': user.username,
                '_id': user._id,
                cookie
            }
        } catch (error) {
            res.json(error)
            console.log(error)
        }
    }else {
        req.user = {
            cookie: 'none'
        }
    }
    next();
}

module.exports = {
    authMiddleware,
}