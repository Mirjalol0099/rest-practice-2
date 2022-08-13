import {client} from '../configs/database.js'


export function AllBooks() {
    const Get_All = "SELECT * FROM books;"
    return client.query(Get_All)
}


export function GetBookByGenre(genre) {
    const Get_By_Genre = "SELECT * FROM books where genre=$1;"
    return client.query(Get_By_Genre, [genre])
}


export function createBook(name, author, genre, since) {
    const sql = `INSERT INTO books (name, author, genre, since)
     VALUES ($1, $2, $3, $4);`
    client.query(sql, [name, author, genre, since])
}


export function deleteBook(id){
    const sql = `DELETE FROM books
    WHERE id = $1`
    return client.query(sql, [id])
}


