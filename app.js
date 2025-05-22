//Here!

//starter code from https://www.geeksforgeeks.org/how-to-install-express-in-a-node-project/
//https://www.geeksforgeeks.org/rest-api-introduction/

const express = require('express');
const path = require('path');
const app = express();

const fs = require('fs'); 


const PORT = 3005;

const data = require('./quotes_data_convert.json');

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});

//rest api integration:

// Define a route for GET requests
app.get('/data', (req, res) => {
    //get request

    //receive from index.html
    let user_author = req.query.author;
    let user_quote = req.query.quote;
    let user_tags = req.query.tag;

    if (user_author === undefined) user_author = "";
    if (user_quote === undefined) user_quote = "";
    if (user_tags === undefined) user_tags = "";

    /*
    const quote = req.query.quote;
    const tag = req.query.data;
    */

    //receive from json
    let author_result = data.filter(item => {
        const author_matches = item.author && item.author.toLowerCase().includes(user_author.toLowerCase());
        const quote_matches = item.text && item.text.toLowerCase().includes(user_quote.toLowerCase());
        const tag_matches = item.tags && item.tags.toLowerCase().includes(user_tags.toLowerCase());
      
        return author_matches && quote_matches && tag_matches;
      }
      );



    res.json(author_result);
    

    //res.json({ message: 'Returning list of quotes' });
});



/*
// Define a route for POST requests
app.post('/quotes_data_convert', (req, res) => {
    const newUser = req.body;
    res.json({ message: 'User created', user: newUser });
});
*/
