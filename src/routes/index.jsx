import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import NavBar from '../layouts/NavBar'
import AddBook from '../features/books/AddBook'
import BooksView from '../features/books/BooksView'
import Footer from '../layouts/Footer'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/edit-book' element={<EditBook/>}/>
        <Route path='/show-books' element={<BooksView/>}/>

    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default Index