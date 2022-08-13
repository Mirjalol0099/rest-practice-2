import { Router } from "express";
import { AllBooks, createBook, GetBookByGenre, deleteBook} from "../service/books.service.js";

const router = Router()

// get all books
router.get('/', async (req, res) => {
    try {
        const result = await AllBooks()
        res.json({
            message: 'All books retrived.',
            books: result.rows
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
})

//GetBookByGenre
router.get('/:genre', async (req, res) => {
    try {
        const genre = req.params.genre
        const result = await GetBookByGenre(genre)

        if (result.rows.length === 0) {
            res.status(404).json({
                message: `Book with genre = ${genre} not found.` 
            })
        }
        else {
            res.json({
                message: 'One Book retrived.',
                book: result.rows[0]
            })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
})






router.post('/', async (req, res) => {
    try{
        const {name, author, genre, since} = req.body
        await createBook(name, author, genre, since)
        res.status(200).json({
            message:'Book added'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Internal Server Error',
            error: err
        })
    }

})


router.delete('/:id', async (req, res) => {
    try{
        
        const {name, author, genre, since} = req.body
        await deleteBook(req.params.id, name, author, genre, since)
        res.status(200).json({
            message:'Book deleted'
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Internal Server Error',
            error: err
        })
    }
})



export default router