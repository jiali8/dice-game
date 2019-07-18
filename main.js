// Dice Game
'use strict';

// global variables
let funds = 5000; 
let socks = 0; 
let bikes = 0; 
let trips = 0;
let rings = 0;
let motorcycles = 0; 
let cars = 0;
let boats = 0; 
let houses = 0;

// event listeners
document.getElementById('play-btn').addEventListener('click', rollDice);
document.getElementById('purchase-btn').addEventListener('click', purchaseItem);
document.getElementById('play5times').addEventListener('click', play5); 
document.getElementById('reset-btn').addEventListener('click', clearResults);

// event functions
function rollDice () {
    //generate a random number between 1 and 6 for both House and Player
    let diceHouse = Math.floor(6*Math.random())+ 1; 
    let dicePlayer = Math.floor(6*Math.random())+ 1; 

    //collects bet amount from user (input)
    let betSum =  Number(document.getElementById('bet-input').value); 

    // determine who wins and loses (process)
    if (diceHouse > dicePlayer) {
        funds -= betSum;
        document.getElementById('funds').innerHTML = funds;
        
    } else {
        funds += betSum;
        document.getElementById('funds').innerHTML = funds;
        
    }

    // to prevent the funds from going below zero 
    if (funds < 0 ) {
        document.getElementById('funds').innerHTML = 0;
    }

    // displays results of dice rolling for House (output)
    if (diceHouse == 1) {
        document.getElementById('house-die').src = "images/1.png";
    } else if (diceHouse == 2) {
        document.getElementById('house-die').src = "images/2.png"
    } else if (diceHouse == 3) {
        document.getElementById('house-die').src  = "images/3.png"
    } else if (diceHouse == 4) {
        document.getElementById('house-die').src  = "images/4.png"
    } else if (diceHouse == 5) {
        document.getElementById('house-die').src  = "images/5.png"
    } else if (diceHouse == 6) {
        document.getElementById('house-die').src  = "images/6.png"
    }

    // displays results of dice rolling for Player (output)
    if (dicePlayer == 1) {
        document.getElementById('player-die').src = "images/1.png";
    } else if (dicePlayer == 2) {
        document.getElementById('player-die').src = "images/2.png"
    } else if (dicePlayer == 3) {
        document.getElementById('player-die').src  = "images/3.png"
    } else if (dicePlayer == 4) {
        document.getElementById('player-die').src  = "images/4.png"
    } else if (dicePlayer == 5) {
        document.getElementById('player-die').src  = "images/5.png"
    } else if (dicePlayer == 6) {
        document.getElementById('player-die').src  = "images/6.png"
    }

}

function purchaseItem () {
    //simulate and display results 
   if (funds < 1000 ) {
        document.getElementById('loot').innerHTML += '<img src="images/socks.png">';
        socks++;
        document.getElementById('socks').innerHTML =  socks; 
        
    } else if (funds <= 1666) {
        document.getElementById('loot').innerHTML += '<img src="images/ring.png">';
        funds -=1000; //subtracts $1000
        document.getElementById('funds').innerHTML = funds;  
        rings++;
        document.getElementById('rings').innerHTML = rings;

    } else if (funds <= 3333) {
        document.getElementById('loot').innerHTML += '<img src="images/bike.jpg">';
        funds -=1000; //subtracts $1000
        document.getElementById('funds').innerHTML = funds; 
        bikes++;
        document.getElementById('bikes').innerHTML = bikes; 

    } else if (funds <= 5000) {
        document.getElementById('loot').innerHTML += '<img src="images/trip.jpg">';
        funds -=1000; //subtracts $1000
        document.getElementById('funds').innerHTML = funds; 
        trips++;
        document.getElementById('trips').innerHTML = trips; 

    } else if (funds > 5000) {
        //generate random number between 1 and 4
        let over5000 = Math.floor(4*Math.random())+ 1; 

        //subtracts $5000 each time player buys item 
        funds -=5000; 
        document.getElementById('funds').innerHTML = funds; 

        // simulate and display results 
        if (over5000 == 1) {
            document.getElementById('loot').innerHTML += '<img src="images/house.png">';
            houses++;
            document.getElementById('houses').innerHTML =  houses;

        } else if (over5000 == 2) {
            document.getElementById('loot').innerHTML += '<img src="images/boat.png">';
            boats++;
            document.getElementById('boats').innerHTML =  boats;

        } else if (over5000 == 3) {
            document.getElementById('loot').innerHTML += '<img src="images/motorcycle.jpg">';
            motorcycles++; 
            document.getElementById('motorcycles').innerHTML = motorcycles; 

        } else if (over5000 == 4) {
            document.getElementById('loot').innerHTML += '<img src="images/car.png">';
            cars++;
            document.getElementById('cars').innerHTML = cars; 
        } 
    } 

    // tells player that his/her funds are low when funds are below or equal to $1000
    if (funds <= 1000) {
        document.getElementById('fundsLowNote').innerHTML = "funds are Low";
        document.getElementById('fundsLowNote').style.color = "red";
        document.getElementById('fundsLowNote').style.fontSize = "20px";
    } 

    //display total number of items 
    document.getElementById('total').innerHTML = socks + bikes + rings + trips + motorcycles + cars + boats + houses; 

}

//allows the player to bid 5 times in a row 
function play5 () {
    for(let n = 0; n < 5; n++) {
        rollDice();
    }
} 


// clears the previous results 
function clearResults() {
    document.getElementById('funds').innerHTML = 5000; 
    document.getElementById('total').innerHTML = '0';
    document.getElementById('socks').innerHTML = "0";
    document.getElementById('bikes').innerHTML = "0";
    document.getElementById('rings').innerHTML = "0";
    document.getElementById('trips').innerHTML = "0";
    document.getElementById('motorcycles').innerHTML = "0";
    document.getElementById('cars').innerHTML = "0";
    document.getElementById('boats').innerHTML = "0";
    document.getElementById('houses').innerHTML = '0';
    document.getElementById('loot').innerHTML = ' ';
    document.getElementById('fundsLowNote').innerHTML = "+" ;
    document.getElementById('fundsLowNote').style.color = "black";
    document.getElementById('house-die').src = "images/question-mark.png" ;
    document.getElementById('player-die').src = "images/question-mark.png" ;
    
}

