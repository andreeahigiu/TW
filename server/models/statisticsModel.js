const { Pool } = require('pg');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const pool = new Pool({
    user: 'xuepxenxehvqij',
    host: 'ec2-54-220-170-192.eu-west-1.compute.amazonaws.com',
    database: 'dao76af3aukgsk',
    password: '281e949b84f332cd8b00e667008a5b18b055c6e6acdc707712b508077503447f',
    port: 5432,
    ssl: true
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});


function findAll() {
    return new Promise((resolve, reject) => {

        const query = `SELECT * FROM agecategory`;

        pool.connect((err, client, done) => {
            if (err) throw err;
            client.query(query, (err, res) => {
                done();
                if (err) {
                    console.log(err.stack);
                }
                resolve(res)
            });
        });
    })
}


module.exports = {
    findAll
}