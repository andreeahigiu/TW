const Product = require('../models/statisticsModel')

// const { getPostData } = require('../utils')

// @desc    Gets All Products
// @route   GET /api/products
async function getStatistics(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getStatistics
}