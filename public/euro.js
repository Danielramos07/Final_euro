
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        getNewBet();
    });


    function getNewBet() {
        fetch('http://localhost:3000/euro')
            .then((response) => response.json())
            .then (bet => {
                console.log(bet.numbers);


    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });

    

    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });

                console.log(response);
    })
            .catch((error) => console.error(error))
    }
});


function genRandomNumbers(n, min, max) {
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a,b) => a-b);
}

function genJSONBet() {

    let numbers = genRandomNumbers(5, 1, 50);
    let stars = genRandomNumbers(2, 1, 12);

    let newBet = {
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars,
    }

    console.log(newBet);

    JSONBet = JSON.stringify(newBet);

    console.log(JSONBet);

    return JSONBet;

}

function genNewBet() {

    let JSONbet = genJSONBet();
    let bet = JSON.parse(JSONbet);

    console.log(bet);
   
    theOLNumbers = document.getElementById('olMain');
    theOLNumbers.innerHTML = "";

    bet.numbers.forEach(number => {
        newLi = document.createElement("li");
        newLi.innerHTML = number;
        theOLNumbers.appendChild(newLi);
    });

    

    theOLStars = document.getElementById('olStars');
    theOLStars.innerHTML = "";

    bet.stars.forEach(star => {
        newLi = document.createElement("li");
        newLi.innerHTML = star;
        theOLStars.appendChild(newLi);
    });
}

