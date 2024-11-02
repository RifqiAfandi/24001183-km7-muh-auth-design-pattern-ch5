const { Car } = require("../models");

async function getAllCars(req, res) {
    try {
        const {
            available,
            page=1,
            limit=5
        } = req.query;
        const offset = (page-1) * limit;
        const condition = {};
        if (available) condition.available = available;
        const cars = await Car.findAndCountAll({
            where: condition,
            limit: limit,
            offset: offset,
        });
        totalData = cars.count;
        totalPages = Math.ceil(totalData/limit);
        res.status(200).json({
            status: "Success",
            message: "Success get data all cars",
            isSusccess: true,
            data: {
                totalData,
                totalPages,
                currentPages: page,
                cars: cars.rows,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
        });
    }
};

async function getCarbyId(req, res) {
    try {
        const id = req.params.id;
        const car = await Car.findByPk(id);
        if (!car) {
            return res.status(404).json({
                status: "Failed",
                message: "Car not found",
                isSuccess: false,
            });
        }
        res.status(200).json({
            status: "Success",
            message: `Success get car with id : ${id}`,
            isSuccess: true,
            data: {
                car
            }
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
        });
    }
};

async function createCar(req, res) {
    try {
        const {
            model,
            brand,
            year,
            number,
            price,
            available,
        } = req.body;
        if (!model || !brand || !year || !number || !price || !available){
            return res.status(400).json({
                status: "Failed",
                message: "Model, Brand, Year, Number, Price and Available are required",
                isSuccess: false,
            });
        };
        if (price < 1000000){
            return res.status(400).json({
                status: "Failed",
                message: "Minimum price is above 1,000,000",
                isSuccess: false,
            });
        };
        const car = await Car.create({
            model,
            brand,
            year,
            number,
            price,
            available,
            createdBy: req.user.name,
            lastUpdatedBy: req.user.name,
            deletedBy: null,
            deletedAt: null,
        });
        res.status(201).json({
            status: "Success",
            message: "Success create car",
            isSusccess: true,
            data: {
                car
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
        });
    }
};

async function updateCar(req, res) {
    try {
        const id = req.params.id;
        const {
            model, 
            brand, 
            year, 
            number, 
            price, 
            available,
        } = req.body;
        const car = await Car.findOne({
            where: {
                id,
            },
        });
        if (!car) {
            res.status(404).json({
                status: "Failed",
                message: "Car not found",
                isSuccess: false,
            });
        }
        await Car.update({
            model, 
            brand, 
            year, 
            number, 
            price, 
            available, 
        });
  
      res.status(200).json({
        status: "Success",
        message: "Success update product",
        isSuccess: true,
        data: {
          product: {
            id,
            name,
            stock,
            price,
          },
        },
      });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            message: err.message,
            isSuccess: false,
        });
    }
};

async function deleteCar(req, res) {
    try {
        const id = req.params.id;
        const car = await Car.findByPk(id);

        if (!car) {
            return res.status(404).json({
                status: "Failed",
                message: "Car not found",
                isSuccess: false,
                data: null,
            });
        }
        await car.destroy();

        res.redirect("/dashboard/cars");
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error.message,
            isSuccess: false,
            data: null,
        });
    }
};

module.exports = {
    getAllCars,
    getCarbyId,
    createCar,
    updateCar,
    deleteCar,
};