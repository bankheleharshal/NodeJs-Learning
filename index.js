 const HOST = '127.0.0.1'
const PORT = 2000

const express = require("express"); 
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//  connect DB
require("./config/db");

//  import model (IMPORTANT)
const User= require("./models/User");

// route
app.get('/', (req, res) => {
    res.render("signup"); //  
});

app.post('/saveform', async (req, res) => {
    try {
        const result = new User(req.body); // now works
        await result.save();
        
        res.redirect('/userdata');
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});

// optional route
app.get('/userdata', async (req, res) => {
    const data = await User.find();
    res.json(data);
});

// fallback
app.use((req, res) => {
    res.status(404).send('404 page not found');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});