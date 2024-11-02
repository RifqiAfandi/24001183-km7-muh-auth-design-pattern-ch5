const jwt = require("jsonwebtoken");
const { Users } = require("../models");

module.exports = async (req, res, next) => {

    try {
        const bearerToken = req.headers.authorization;
        if (!bearerToken) {
            return res.status(401).json({
                status: "Failed",
                msg: "Token is missing",
                isSuccess: false,
            });
        };
        const token = bearerToken.split("Bearer ")[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Users.findByPk(payload.userId);
        if (!user){
            return res.status(401).json({
                status: "Failed",
                msg: "User not found",
                isSuccess: false,
            });
        };
        if (user.role != "Super Admin"){
            return res.status(403).json({
                status: "Failed",
                msg: "Access denied",
                isSuccess: false,
            });
        };
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
        status: "Failed",
        message: error.message,
        isSuccess: false,
        data: null,
        });
    }
};