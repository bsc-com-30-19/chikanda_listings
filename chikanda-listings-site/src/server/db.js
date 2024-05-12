const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "chickenfat", //If you are testing this on your own pc change this to ur postgres password
    host: "localhost",
    port: 5432,
    database: "chikandalistings"
});

module.exports(pool);