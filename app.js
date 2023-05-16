const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());

const posts = require('./routes/posts/postsRoutess');

app.use('/posts', posts);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('static'));



app.get('/', (req,res)=>{
    console.log('template loaded');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
}); 

app.listen(5000);