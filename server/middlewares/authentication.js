const jwt = require('jsonwebtoken')
const { Customer } = require('../models')

const authentication = function (req, res, next) {
    try {
        const { token } = req.headers
        const decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded
        Customer.findOne({ where: { email: req.user.email } })
            .then(user => {
                if (user) {
                    next()
                } else {
                    res.status(404).json({
                        message: 'User not found'
                    })
                }
            })
    } catch (error) {
        res.status(400).json({
            message: 'forbidden access'
        })
    }
}

module.exports = authentication