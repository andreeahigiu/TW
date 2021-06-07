// var pgp = require('pg-promise')(/* options */)

// const { Client } = require('pg');

// var db = pgp('postgres://xuepxenxehvqij:281e949b84f332cd8b00e667008a5b18b055c6e6acdc707712b508077503447f@ec2-54-220-170-192.eu-west-1.compute.amazonaws.com:5432/dao76af3aukgsk')
const {Client} = require('pg');

const client = new Client({
    host: "ec2-54-220-170-192.eu-west-1.compute.amazonaws.com",
    port: 5432,
    user:"xuepxenxehvqij",
    password:"281e949b84f332cd8b00e667008a5b18b055c6e6acdc707712b508077503447f",
    database: "dao76af3aukgsk"
})

client.connect();

// client.query(`select * from agecategory`, (err,result) => {
//     if(!err) {
//         console.log(result.rows);
//     }
//     client.end();
// })

function findAll() {
     return new Promise((resolve, reject) => {
    //     // client.query(`select * from agecategory`, (err,result) => {
    //     //     if(!err) {
    //     //         console.log(result.rows)
    //     //     }
    //     //     client.end()
    //     // })
         resolve()
     })

}


module.exports = {
    findAll
}