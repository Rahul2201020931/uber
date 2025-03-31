const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
module.exports.authUser= async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const isblacklisted=await userModel.findOne({token:token});
    if(isblacklisted){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // Verify the token and extract user information
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}