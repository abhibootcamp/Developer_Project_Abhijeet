const express = require('express');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// MongoDB Connection
const MongoClient = require('mongodb').MongoClient;
const uri = require('./config/key').mongoURI;
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect()
      .then(() => console.log("MongoDB Connected"))
      .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts',posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port '+ port)
});
