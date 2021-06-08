const http = require('http')
const { getStatistics, getAge } = require('./controllers/statisticsController')


const server = http.createServer((req, res) => {
    if (req.url === '/api/details' && req.method === 'GET') {
        getStatistics(req, res)
    }
    else if (req.url.match(/\/details\/age\/\w+\/\w+\/\w+/) && req.method === 'GET') {
        const county = req.url.split('/')[3]
        const month = req.url.split('/')[4]
        const year = req.url.split('/')[5]
        const table = "agecategory"
        getAge(req, res, county, month, year, table)
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
module.exports = server;