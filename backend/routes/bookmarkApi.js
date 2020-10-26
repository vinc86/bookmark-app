const express = require("express");
const router = express.Router();
const bookmarks = require("../models/bookmarksSchema");

// Get all bookmarks
router.get("/bookmarks",(req,res)=>{
    bookmarks.find()
    .sort({date: -1})
    .then(items=>res.json(items))
    .catch(err=>{
        console.log(err);
        res.status(500).json({error: err})
    })
})

// Add New bookmark
router.post("/add",(req,res)=>{
   try{
       const newBookmark = new bookmarks(req.body);
       newBookmark.save(); 
       res.redirect("/api/bookmarks");
   }catch(err){
       res.status(500).json(err.message)
   }
})

//update bookmark
router.patch("/:id",async(req,res)=>{

    const {id} = req.params;
    const params = req.body;
    const bookmark = await bookmarks.findById(id);
    Object.assign(bookmark,{...params})
    bookmark.save()
    .then(item => res.send({
        updated: true,
        data: item,
    }))
    
})


// delete Bookmark
router.delete("/:id",async (req,res)=>{
    const {id} = req.params;
     await bookmarks.findById(id)
        .then(item => item.remove().then(res.json({message:"Bookmark deleted"})))
        .catch(err=>{
            res.send({Error: "Bookmark not found"})
        })
})




module.exports = router;