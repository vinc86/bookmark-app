const port = process.env.PORT || 5000;

module.exports= app =>{
    app.listen(port,(err)=>err ? console.log("Server error...") : console.log(`Server listening on port: ${port}`))
}