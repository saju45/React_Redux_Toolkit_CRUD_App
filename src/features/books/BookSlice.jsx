import { createSlice } from "@reduxjs/toolkit";

const initialBooks={
    books:[
        {id : 1,title : "Love Bangladesh",author : "Shanawaj hossain"},
        {id : 2,title : "Nothing so say",author : "Sohrab HOOSAIN"},
        {id : 3,title : "Bangladeshi",author : "Shanawaj hossain"},

    ]
}

export const BookSlice=createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=> state,
        addBook:(state,action)=> {
            state.books.push(action.payload)
        }, 
        deleteBook:(state,action)=> {
            state.books=state.books.filter((book)=> book.id !=action.payload)
            
        },
        updateBook:(state,action)=> {
            const {id,title,author}=action.payload
          const isBookexits=state.books.filter((book)=> book.id ==id)
        
          if(isBookexits){
            isBookexits[0].title=title,
            isBookexits[0].author=author;
          }
            
        },


    }
})

export const{showBooks,addBook,deleteBook,updateBook}=BookSlice.actions

export default BookSlice.reducer;