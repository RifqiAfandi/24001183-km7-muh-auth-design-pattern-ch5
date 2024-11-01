const { Car } = require("../models");

async function getCarbyId(req, res) {
    try {
        const id = req.params.id;
        const car = await Car.findByPk(id);
        if (!car) {
            return res.status(404).json({
                status: "Fail",
                message: "Car not found",
                isSuccess: false,
                data: null,
            });
        }

        res.render("cars/detail", { car });
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error.message,
            isSuccess: false,
            data: null,
        });
    }
}

async function getAllCars(req, res) {
    try {
        const cars = await Car.findAll();
        res.render("cars", { cars });
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error.message,
            isSuccess: false,
            data: null,
        });
    }
}

async function updateCar(req, res) {
    try {
        const id = req.params.id;
        const { model, tahun, no_plat, status, harga } = req.body;

        const detailCar = await Car.findByPk(id);
        if (!detailCar) {
            return res.status(404).sendFile(path.join(__dirname, "../views/errors", "404.html"));
        }

        if (req.file) {
            const file = req.file;
            const split = file.originalname.split(".");
            const ext = split[split.length - 1];
            
            const uploadedImage = await imagekit.upload({
                file: file.buffer,
                fileName: `${split[0]}-${Date.now()}.${ext}`
            })

            if (!uploadedImage) {
                return res.status(400).sendFile(path.join(__dirname, "../views/errors", "400.html"));
            }

            detailCar.model = model,
            detailCar.tahun = tahun,
            detailCar.no_plat = no_plat,
            detailCar.status = status,
            detailCar.harga = harga,
            detailCar.foto_mobil = uploadedImage.url
        }
        else{
            detailCar.model = model,
            detailCar.tahun = tahun,
            detailCar.no_plat = no_plat,
            detailCar.status = status,
            detailCar.harga = harga
        }

        await detailCar.save();
        res.redirect("/dashboard/cars");
    }
    catch (error) {
        return res.status(500).sendFile(path.join(__dirname, "../views/errors", "500.html"));
    }
}

async function createCar(req, res) {
    try {
        const file = req.file;
        const split = file.originalname.split(".");
        const ext = split[split.length - 1];
        const { model, tahun, no_plat, status, harga } = req.body;

        const uploadedImage = await imagekit.upload({
            file: file.buffer,
            fileName: `${split[0]}-${Date.now()}.${ext}`,
        });
        if (!uploadedImage) {
            return res
                .status(400)
                .sendFile(path.join(__dirname, "../views/errors", "400.html"));
        }

        const newCar = await Car.create({
            model,
            tahun,
            no_plat,
            status,
            harga,
            foto_mobil: uploadedImage.url,
        });
        res.redirect("/dashboard/cars");
    } catch (error) {
        res
            .status(500)
            .sendFile(path.join(__dirname, "../views/errors", "500.html"));
    }
}

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
}

module.exports = {
    updateCar,
    createCar,
    getAllCars,
    getCarbyId,
    deleteCar,
};