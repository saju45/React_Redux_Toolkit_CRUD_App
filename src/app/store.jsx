import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../features/books/BookSlice";


const store=configureStore({
    reducer:{
        booksReducer:BooksReducer
    }
})

export default store;