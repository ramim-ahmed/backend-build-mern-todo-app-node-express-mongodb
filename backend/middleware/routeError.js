const routeErrors = (req, res, next) => {
    res.status(404).json({
        message: 'routes not found'
    })
}

module.exports = {
    routeErrors,
}