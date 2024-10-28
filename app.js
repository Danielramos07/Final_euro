express = require('express');

app = new express();


app.use(express.static('public'));

app.get('/euro', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    return res.json(bet())
});

function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}


function bet() {
    numbers = generate(5, 1, 50);
    stars = generate(2, 1, 12);
    
    newbet = {
        "numbers": numbers,
        "stars" : stars
    }
    return newbet;
}


app.listen(3000, () => {console.log("listening")});