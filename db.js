const mysql = require('mysql');

function connect()
{
    const connection = mysql.createConnection({
        host:'192.168.1.55',
        user:'root',
        password:'root',
        database:'jenkin',
        port:1234
    })
    connection.connect()
    return connection
}

module.exports = {
    connect:connect
}