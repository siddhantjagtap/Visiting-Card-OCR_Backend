const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database");
    }
});

// Convert `query` to return a promise
const query = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = { db, query };
