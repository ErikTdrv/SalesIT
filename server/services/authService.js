require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const bcrypt = require('bcrypt')
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
const register = async (data) => {
    const existingEmail = await User.findOne({email: data.email})
    const existingUsername = await User.findOne({username: data.username})

    if(existingEmail){
        throw new Error('Email already exists!')
    }else if(existingUsername){
        throw new Error('Username already exists!')
    }
    const user = await User.create(data)
    return createAccessToken(user)
}
const login = async (email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Invalid email or password!')
    }
    const isUser = await bcrypt.compare(password, user.password)
    if(isUser){
        let userToReturn = createAccessToken(user)
        userToReturn.avatarImg = user.avatarImg;
        userToReturn.imageId = user.imageId;
        return userToReturn
    }else {
        throw new Error('Invalid email or password!')
    }
}
const getUser = async (id) => {
    return await User.findById(id).populate('createdComputers').populate('createdMonitors').populate('createdPhones');
}
const editUserProfile = async (user) => {
    
}
const deleteUserProfile = async (userId) => {
    // TO DO...
}

module.exports = {
    login,
    register,
    createAccessToken,
    validateToken,
    getUser,
}