import pg from "pg"

export const client = new pg.Client({
    host: 'localhost',
    user: 'postgres',
    password: '0099',
    database: 'practices',
    port: 5432
})

client.connect()