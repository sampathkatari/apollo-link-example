const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
const users = [
    {
        id: 1,
        name: 'John',
        age: 28
    },
    {
        id: 2,
        name: 'Barry',
        age: 26
    },
    {
        id: 3,
        name: 'Cisco',
        age: 29
    }
]
app.get('/users', (req, res) => {
    res.send(users)
});

app.listen(4000, () => {
    console.log('server started at port 4000')
});