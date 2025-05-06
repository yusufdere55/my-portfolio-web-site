const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sql = require('mysql2');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

const sqlConfig = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

global.sqlPool = new sql.createPool(sqlConfig);
const promisePool = global.sqlPool.promise();

promisePool.getConnection()
    .then(() => console.log('Database connection successfully'))
    .catch(err => console.error('Database connection error: ',err))
    

//Routes


app.get('/',(req,res) => {
    res.json({ message : 'My portfolio API'})
})

module.exports = app;