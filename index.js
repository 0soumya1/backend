const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/flowers", (req,resp)=>{
    const arr=[{
        name:"rose"
    }]
     resp.send(arr);
})

app.listen(5000);