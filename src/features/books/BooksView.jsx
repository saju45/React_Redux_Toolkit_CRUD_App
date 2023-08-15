import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, showBooks } from './BookSlice';
import { Link, useNavigate } from 'react-router-dom';

const BooksView = () => {
    const books=useSelector(state=>state.booksReducer.books);


    const navigate=useNavigate();
    const dispatch=useDispatch();
    console.log(books);


    const handleDelete=(id)=>{

        dispatch(deleteBook(id))
    }

  return (
    <div>
        <h2>List of books</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Author</th> 
                    <th>Actions</th>                   
                </tr>
            </thead>
            <tbody>
            {books && books.map((book)=>{
                const {id,title,author}=book
                return <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                       <Link to="/edit-book" state={{id,title,author}}><button >Edit</button></Link>
                        <button onClick={()=>handleDelete(id)}>Delete</button
                     ></td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
  )
}

export default BooksView