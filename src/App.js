import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookmarkContext from './BookmarkContext';
import AddBookmark from './components/AddBookmark/AddBookmark';
import BookmarkConatiner from './components/BookmarkContainer/BookmarkContainer';
import DisplayBookmarks from './components/DisplayBookmarks/DisplayBookmarks';
import SideBar from './components/SideBar/SideBar';
import UpdateBookmark from './components/UpdateBookmark/UpdateBookmark';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const [toUpdate, setToUpdate] = useState([])
  const [showUpdate, setShowUpdate] = useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch("/api/bookmarks")
    .then(res=> res.json())
    .then(res=> setData(res))
  },[])

  const updateBookmark =(id)=>{
    const isThere = toUpdate.find(bookmark => bookmark._id === id );
    if(isThere){
      alert("Bookmark already added")
      return
    }
    data.filter(bookmark => bookmark._id === id && setToUpdate([bookmark]));
    setShowUpdate(true)
    
}


  return (
    <BookmarkContext.Provider value={{data, setData, setError, updateBookmark,toUpdate, setToUpdate,setShowUpdate}}>
      <main>
      <Router>
      <SideBar />
        <div className="App">
        <h1>Bookmark Storage App</h1>
          <Route path="/" exact component={AddBookmark} />
          <Route path="/display" exact component={BookmarkConatiner} />
          <Route path="/update/:id" exact component={UpdateBookmark} /> 
         
        </div>
        
        
      </Router>
      </main>
    </BookmarkContext.Provider>
  );
}

export default App;
