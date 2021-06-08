const Product = require('../models/statisticsModel')

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