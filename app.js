const express = require('express');
const app = express();
const DataStore = require("nedb");

const PORT = 4001;

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


const database = new DataStore("database.db");
database.loadDatabase();


app.get('/api', (req, res) =>{
    database.find({}, (error, data) =>{
        if(error){
            res.send("Error!");
            res.end();
            return;
        } else {
        res.json(data);
        };
    });
});


app.post('/api', (req, res, next) =>{
    console.log("I got a request");
    //console.log(req.body);
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status: "Good!",
        latitude: data.lat,
        timestamp: data.timestamp,
        longitude: data.long,
        mood: data.mood
    })
});

/*app.post('/vegetables', (req, res, next) =>{
    console.log("I got a veggie request");
    const data =  req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status:"Veggie Good",
        FavouriteFood: data.vegetable,
        timestamp: timestamp
    })
}); */


app.listen(PORT, () => {
    console.log(`We are listening at PORT ${PORT}`);
})