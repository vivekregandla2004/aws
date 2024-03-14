const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server running on the port number ${PORT}'));

//TESTING
app.get('/test',async function(req,res){
    res.json("This is from AWS");
});