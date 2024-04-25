import { createPool } from 'mysql2'

let mysql = require('mysql2');
const pool = {
    host: process.env.NEXT_PUBLIC_HOST,
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    database: process.env.NEXT_PUBLIC_DATABASE,
    port: process.env.NEXT_PUBLIC_PORT
}

export const queryExecute = async (query: any, values: any) => {

    // console.log(
    //     {
    //         host: process.env.NEXT_PUBLIC_HOST,
    //         user: process.env.NEXT_PUBLIC_USER,
    //         password: process.env.NEXT_PUBLIC_PASSWORD,
    //         database: process.env.NEXT_PUBLIC_DATABASE,
    //         port: process.env.NEXT_PUBLIC_PORT
    //     }
    // )
    const connection = mysql.createConnection(pool);
    connection.connect();
    return await new Promise((resolve, reject) => {
        connection.query(query, values, function (error: any, results: any, fields: any) {
            if (error) console.log(error);
            else console.log('Connected to db...!')
            resolve(results);
            connection.end();
        })
    })
}