import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BookmarkContext from '../../BookmarkContext';
import "./sideBar.css"

export default function SideBar() {
    const{showUpdate,toUpdate} = useContext(BookmarkContext)
    return (
        <div className="side-bar">
            <h2 className="side-bar-title">Dashboard</h2>
            <div className="menu-container">
                <Link className="nav-links" to="/">Add New</Link>
                <Link className="nav-links" to="/display">Saved</Link>
                {toUpdate.length >0 ? <Link className="nav-links" to="/update/:id">To Update</Link>: null}
            </div>
        </div>
    )
}
