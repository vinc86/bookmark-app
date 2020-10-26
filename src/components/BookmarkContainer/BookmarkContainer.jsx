import React from 'react'
import AddBookmark from '../AddBookmark/AddBookmark'
import DisplayBookmarks from '../DisplayBookmarks/DisplayBookmarks'

export default function BookmarkConatiner() {
    return (
        <>
        <h2 className ="sub-title">Your List</h2>
        <div className ="container">
            <div className="actions">
               
            </div>
            <DisplayBookmarks />
        </div>
        </>
    )
}
