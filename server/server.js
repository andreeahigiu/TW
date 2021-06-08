const http = require('http')
const { getStatistics } = require('./controllers/statisticsController')


const server = http.createServer((req, res) => {
    if (req.url === '/api/details' && req.method === 'GET') {
        getStatistics(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
module.exports = server;