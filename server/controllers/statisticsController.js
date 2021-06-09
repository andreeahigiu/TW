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


async function getElement(req, res, county, month, year, table) {
    try {
        const product = await Product.findBy(county, month, year, table)


        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        // res.setHeader('Access-Control-Max-Age', 2592000);



        if(!product) {
            //res.writeHead(404, { 'Content-Type': 'application/json' })
            res.writeHead(404, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify({ message: 'Statistic Not Found' }))
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getStatistics,
    getElement
}