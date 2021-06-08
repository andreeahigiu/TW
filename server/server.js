const http = require('http')
const { getStatistics, getElement } = require('./controllers/statisticsController')


const server = http.createServer((req, res) => {
    if (req.url === '/test/details' && req.method === 'GET') {
        getStatistics(req, res)
    }
    else if (req.url.match(/\/details\/age\/[\w-]+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "agecategory"
        getElement(req, res, county, month, year, table)
    } 
    else if (req.url.match(/\/details\/compensation\/[\w-]+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "compensationcategory"
        getElement(req, res, county, month, year, table)
    } 
    else if (req.url.match(/\/details\/environment\/[\w-]+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "environmentcategory"
        getElement(req, res, county, month, year, table)
    } 
    else if (req.url.match(/\/details\/gender\/[\w-]+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "gendercategory"
        getElement(req, res, county, month, year, table)
    } 
    else if (req.url.match(/\/details\/studies\/[\w-]+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "studiescategory"
        getElement(req, res, county, month, year, table)
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
module.exports = server;