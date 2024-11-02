const healthCheck = async (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "Application passed healtcheck",
            isSuccess: true,
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Application failed pass healtcheck",
            isSuccess: false,
        });
    }
};

function onLost(req, res, next) {
    res.status(404).json({
        status: "Failed",
        message: "API not found",
        isSuccess: false,
    });
};

module.exports = {
    healthCheck,
    onLost,
};