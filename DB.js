// Here we will contain logic to communicate with the PostgreSQL database
const Pool = require("pg").Pool;
// import { Pool } from 'pg';

// const pool = new Pool({
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 5432,
//     database: "ConvertThatClimb"
// });

// ssl: true,
// sslmode: require,
// rejectUnauthorized: false,
// requestCert: false,
// sslfactory: "org.postgresql.ssl.NonValidatingFactory"
// PGSSLMODE: "heroku config:set PGSSLMODE=no-verify"
// PGSSLMODE: "no-verify"

const pool = new Pool({
    user: "cyyvvnrkenaflx",
    password: "e01d152e5921a4a2449f701b320624501aace6c775ece4436b1c2bb2bd98dfc8",
    host: "ec2-54-91-188-254.compute-1.amazonaws.com",
    port: 5432,
    database: "dlgpn80nklvf3",
    ssl: {
        rejectUnauthorized: false,
    }
});

module.exports = pool;