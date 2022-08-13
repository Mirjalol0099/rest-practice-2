import express from 'express'
import cors from 'cors'
import booksRouter from './routes/books.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/books',booksRouter)


app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
})