
import React, { useContext, useState } from 'react'
import BookmarkContext from '../../BookmarkContext'
import "./displayBookmarks.css";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function DisplayBookmarks() {

    const {data,setData,updateBookmark} = useContext(BookmarkContext);
  
    const deleteBookmark =(id)=>{
       const filter= data.filter(bookmark => bookmark._id !== id);
       axios
       .delete(`/api/${id}`)
       filter && setData(filter)
    }
    

   
    const openLink =(link)=>{
        window.open(link)
    }
    const GetData = data.map(bookmark =>{

        return(
          <div key={bookmark._id} className="bookmark-card">
              <div className="mid-section">
                <h2 className ="bookmark-name">{bookmark.name}</h2>
                <p className ="bookmark-category">{bookmark.category}</p>
              </div>
              <div className="btn-section">
                <button className ="link-btn" onClick={()=>openLink(bookmark.link)}>Go to Website{/* <a href={bookmark.link} rel="noopener noreferrer" target="_blank">Go to Website</a> */}</button>
                <div className="btn-actions">
                    <Link to={"/update/:id"}><button className ="update-btn" onClick={()=>updateBookmark(bookmark._id)}>Update</button></Link>
                    <button className ="delete-btn" onClick={()=>deleteBookmark(bookmark._id)}>&times;</button>
                </div>
              </div>
          </div>
        )
      })

    return (
        <>{GetData}</>
    )
}


