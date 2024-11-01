require('dotenv').config();

const bcrypt = require("bcrypt")
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { where } = require('sequelize');

const register = async (req, res, next) => {
    const { name, age, email, password} = req.body;
    try {
        const validateEmail = await User.findOne({
            where: {
                email
            }
        });
        if (validateEmail){
            return res.status(400).json({
                status: "Failed",
                message: "Email already exist",
                isSuccess: false
            });
        };
        if (!password || password.length < 6) {
            return res.status(400).json({
                status: "Failed",
                message: "Password must be more than 6 char",
                isSuccess: false
            });
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            age,
            email,
            password:hashedPassword,
        });
        res.status(201).json({
            status: "Success",
            message: "Success Register",
            isSusccess: true,
            data: {
                username: user.name,
                age: user.age,
                role: user.role,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: [err.message][0],
            isSusccess: false,
        });
    }
};

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const data = await User.findOne({
            where: {
                email,
            },
        });
        if (!data){
            return res.status(404).json({
                status: "Failed",
                messege: "User doesn't exist",
                isSusccess: false,
            });
        };
        if(data && bcrypt.compareSync(password, data.password)){
            const token = jwt.sign({
                id: data.id,
                username: data.name,
                email: data.email,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRED,
                },
            );
            res.status(200).json({
                status: "Success",
                message: "Success login",
                isSusccess: true,
                data: {
                    username: data.name,
                    email: data.email,
                    token,
                },
            });
        } else {
            res.status(401).json({
                status: "Failed",
                message: "Password Incorrect",
                isSusccess: false,
            });
        };
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSusccess: false,
        });
    }
};

const authenticate = async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            data: {
                user: req.user,
            },
        });
    } catch (err) {

    }
};

module.exports = {
    register,
    login,
    authenticate,
};
