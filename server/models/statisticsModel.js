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

function findBy(county, monthVar, yearVar, table) {
    return new Promise((resolve, reject) => {

        var id;
        var category_id;
        if(table.toString() === 'agecategory'){
            id = "agesid"
            category_id = "agecategory_agesid"
        }
        else if(table.toString() === 'compensationcategory'){
            id = "compensationid"
            category_id = "compensationcategory_compensationid"
        }
        else if(table.toString() === 'environmentcategory'){
            id = "environmentid"
            category_id = "environmentcategory_environmentid"
        }
        else if(table.toString() === 'gendercategory'){
            id = "genderid"
            category_id = "gendercategory_genderid"
        }
        else if(table.toString() === 'studiescategory'){
            id = "studiesid"
            category_id = "studiescategory_studiesid"
        }

        const query = `SELECT * FROM ` + table + ` WHERE ` + id + ` IN 
                        (SELECT ` + category_id + ` FROM countyentity 
                            WHERE countyname LIKE '` + county.toUpperCase() + `' and month = ` + monthVar + ` and year = ` + yearVar + ` )`;
    

     pool.connect((err, client, done) => {
            if (err) throw err;
            client.query(query, (err, res) => {
                done();
                if (err) {
                    console.log("NASOL" + county.toUpperCase())
                    console.log(err.stack);
                }
                resolve(res)
            });
        });
     })
}

function findAgeBy(county, monthVar, yearVar) {
    return new Promise((resolve, reject) => {

        const query = `SELECT * FROM agecategory WHERE agesid IN 
                        (SELECT agecategory_agesid FROM countyentity 
                            WHERE countyname = county and month = monthVar and year = yearVar`;
    
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
    findAll,
    findAgeBy,
    findBy
}