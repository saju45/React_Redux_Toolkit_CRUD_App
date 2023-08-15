import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from './BookSlice'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [title,setTitle]=useState("")
  const [author,setAuthor]=useState("")

  const numberOfBook=useSelector(state=>state.booksReducer.books.length)

  const dispatch=useDispatch();
  const navigate=useNavigate()

  const handleSubmit=(event)=>{

    event.preventDefault();
    const id=numberOfBook+1;
    const books={id,title,author}
  
    dispatch(addBook(books))
       setAuthor("")
      setTitle("")
      navigate("/show-books",{replace:true})

  }

  return (
    <div>
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit} >
          <div className="form-field">
            <label htmlFor="title">Title : </label>
            <input type="text" id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required />
          </div>
          <div className="form-field">
            <label htmlFor="author">Author : </label>
            <input type="text" id='author' name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required />
          </div>
          <button type='submit'>Add Book</button>
        </form>
    </div>
  )
}

export default AddBook