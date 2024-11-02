const jwt = require("jsonwebtoken");
const { User } = require("../models");

const auth = (roles) => {
    return async (req, res, next) => {
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
            const user = await User.findByPk(payload.id);
            if (user.role != roles){
                return res.status(403).json({
                    status: "Failed",
                    msg: "Access denied",
                    isSuccess: false,
                });
            };
            req.user = user;
            next();
        } catch (err) {
            res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
            });
        }
    };
};

module.exports = {
    auth,
};