import express from "express";
const app = express();
import "dotenv/config";

app.get('/', (req, res)=> {
    res.send('The server is running');
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
    console.log("Your secret is " + process.env.SECRET_PASSWORD);
})