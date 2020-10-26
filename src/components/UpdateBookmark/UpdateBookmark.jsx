import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import BookmarkContext from '../../BookmarkContext'
import "./update.css"
import axios from "axios";

export default function UpdateBookmark() {
    
    const {toUpdate,setToUpdate,setShowUpdate,setData,data} = useContext(BookmarkContext);
    const [overwrite, setOverwrite] = useState([]);

    const handleChange =(e)=>{
        setOverwrite({...overwrite,[e.target.name]:e.target.value})
    }

    const removeFromUpdate =(id)=>{
       const filter = toUpdate.filter(bookmark => bookmark._id !== id);
       setToUpdate(filter);
    }

    const removeAll =()=>{
        setToUpdate([]);
        setShowUpdate(false);
      }

     
/* 

//Post to backend
try {
const config = {
headers: {
'Content-Type': 'application/json'
}
};
const body = JSON.stringify(newUser);
const res = await axios.post(
'https://creatives-api.herokuapp.com/api/login',

body,
config
);

setToken(res.data.token);
setUser(res.data.user);
setLoading(false);
handleRedirect();
} catch (err) {
setErrors(err.response.data.errors);
setLoading(false);
}
}; 


*/

console.log(data)

const updateBookmark = async (id)=>{

    await axios
     .patch(`/api/${id}`,
        JSON.stringify(overwrite),{
            headers: {
                "Content-Type":"application/json"
            }
        }
     ).then(res =>data._id === id && setData([...data,res.data.data]))
     document.location.reload()
    
}

   const BookmarkToUpdate = toUpdate.map(bookmark=>{
       const {name,link,category,_id} = bookmark;
        return(
            <form onSubmit={(e)=>e.preventDefault()} key={name}>
            <div className="bookmark-card">
                <div className="mid-section">
                  <input onChange={handleChange} className ="name-update" type="text" name="name" value={overwrite.name ? overwrite.name : name}/>
                  <input onChange={handleChange} className ="link-update" type="text" name="link" value={overwrite.link ? overwrite.link : link} />
                  <input onChange={handleChange} className ="category-update" type="text" name="category" value={overwrite.category ? overwrite.category : category} />
                </div>
                <div className="btn-section">
                  <div style={{display: "flex", flexDirection:"column"}} className="btn-actions">
                    <button onClick={()=>updateBookmark(_id)} style={{width: "100%", marginBottom: "5px"}} className ="update-btn">Update</button>
                    <button onClick={()=>removeFromUpdate(_id)} style={{width: "100%"}} className ="delete-btn">Discard</button>
                  </div>
                </div>
            </div>
            </form>
        )
    })
    
    return (
        <div>
            
                <div className="container">
                    {
                        toUpdate.length >0 ? <>{BookmarkToUpdate}</> :(
                            <>
                                <p style={{marginTop:"40px", fontSize: "2rem"}}>Nothing to Update</p>
                                <Link className ="link-btn" style={{padding: "10px", marginTop: "10px", borderRadius:"12px"}} to="/display">Back to your List</Link>
                            </>
                        )
                    }
                  {/*   {
                    toUpdate.length >0 ? (
                        <> 
                        {BookmarkToUpdate}
                       {toUpdate.length >1 && <Link to="/display"><button className="remove-all" onClick ={()=>removeAll()}>Remove all</button></Link>}
                        </>
                    ) : (
                        <>
                            <p style={{marginTop:"40px", fontSize: "2rem"}}>Nothing to Update</p>
                            <Link className ="link-btn" style={{padding: "10px", marginTop: "10px", borderRadius:"12px"}} to="/display">Back to your List</Link>
                        </>
                    )   
                    }  */}
                </div>
        </div>
    )
}
