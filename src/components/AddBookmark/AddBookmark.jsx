import React, { useContext, useState } from 'react'
import BookmarkContext from '../../BookmarkContext'
import axios from "axios";
import "./addBookmark.css";

export default function AddBookmark() {
    const {data, setData, setError} = useContext(BookmarkContext);
    const [bookmark, setBookmark]= useState([])


    const handleChange =(e)=>{
        setBookmark({...bookmark,[e.target.name]:e.target.value})
    }

    const saveBookmark = (e)=>{
        e.preventDefault();
        const checkName = bookmark.name;
        const isThere = data.find(bookmark => bookmark.name === checkName );
        if(isThere){
          alert("A Bookmark with this name is already stored")
          return
        }
        axios
        .post("/api/add/",bookmark)
        .then( res => setData(res.data))
        .catch(err => console.log(err.message))
        
    }
    
    return (
        <div className="container">
            <div className="add-section">
            {/* <h2 className="title">Add new Bookmark</h2> */}
                <form className="form-add" onSubmit={(e)=>saveBookmark(e)} style={{display: "flex", flexDirection: "column", width: "200px", marginBottom: "40px"}}>
                    <input className="form-input" onChange={handleChange} type="text" name="name" placeholder="Name..."/>
                    <input className="form-input" onChange={handleChange} type="text" name="link" placeholder="Paste an Url Https://.."/>
                    <input className="form-input" onChange={handleChange} type="text" name="category" placeholder="Category..."/>
                    <button className="save-btn" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}
