const serverErrors = (err, req, res, next) => {
    res.status(500).json({
        message: 'internal server errors'
    })
};

module.exports = serverErrors;

