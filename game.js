/* set up the game beteen two players*/

function Game(name, p1, p2) {
    //the prams are used to set the following
    this.name = name, 
    this.player1 = p1;
    this.player2 = p2;
    // the index var is increased if cards are equal on a hand
    this.index = 0;
    console.log("New game created");
    this.handwinner = 0;

    this.cards = shufflecards();
    this.player1Cards = cards.splice(0,15);
    this.player2Cards = cards;
    console.log(this.player2Cards[2]);
    console.log(this.player1Cards[2]);
    console.log(this.player1Cards.length);
    console.log(this.player2Cards.length);
    
}

/*
    This function is used to return a users current card 
*/
Game.prototype.playerCurrentCard = function(userId) {
    //returns player 1 current card
    console.log(this.player1Cards[2]);
    if (this.player1 === userId) {
        var a = this.player1Cards[2];
        return a["cat1"];
    } //returns player 1 current card
    else if (this.player2 === userId) {
        var a = this.player1Cards[2];
        return a["cat1"];
    }
    //returns error if the player is not player 1 or player 2
    else {
        return "invalid ";
    }
} //close playerCurrentCard

//json array of cards for the game 
var cards = [
   {
      "cardId": 1,
      "name": "Wolverine",
      "cat1": 62,
      "cat2": 94,
      "cat3": 90,
      "cat4": 87,
      "cat5": 88,
      "cat6": 6,
      "photo": "wolverine.jpg"
   },
   {
      "cardId": 2,
      "name": "Ultron",
      "cat1": 81,
      "cat2": 74,
      "cat3": 70,
      "cat4": 60,
      "cat5": 62,
      "cat6": 48,
      "photo": "ultron.jpg"
   },
   {
      "cardId": 3,
      "name": "Thor",
      "cat1": 88,
      "cat2": 89,
      "cat3": 82,
      "cat4": 57,
      "cat5": 72,
      "cat6": 21,
      "photo": "thor.jpg"
   },
   {
      "cardId": 4,
      "name": "The Flash",
      "cat1": 99,
      "cat2": 56,
      "cat3": 90,
      "cat4": 99,
      "cat5": 61,
      "cat6": 81,
      "photo": "theflash.jpg"
   },
   {
      "cardId": 5,
      "name": "The Atom",
      "cat1": 78,
      "cat2": 81,
      "cat3": 72,
      "cat4": 76,
      "cat5": 67,
      "cat6": 82,
      "photo": "theatom.jpg"
   },
   {
      "cardId": 6,
      "name": "Superman",
      "cat1": 88,
      "cat2": 96,
      "cat3": 81,
      "cat4": 85,
      "cat5": 79,
      "cat6": 65,
      "photo": "superman.jpg"
   },
   {
      "cardId": 7,
      "name": "Supergirl",
      "cat1": 91,
      "cat2": 90,
      "cat3": 92,
      "cat4": 91,
      "cat5": 79,
      "cat6": 62,
      "photo": "supergirl.jpg"
   },
   {
      "cardId": 8,
      "name": "Storm",
      "cat1": 71,
      "cat2": 13,
      "cat3": 70,
      "cat4": 91,
      "cat5": 68,
      "cat6": 71,
      "photo": "storm.jpg"
   },
   {
      "cardId": 9,
      "name": "SpideyBlack",
      "cat1": 77,
      "cat2": 48,
      "cat3": 29,
      "cat4": 98,
      "cat5": 45,
      "cat6": 73,
      "photo": "spideyblack.jpg"
   },
   {
      "cardId": 10,
      "name": "Spiderman",
      "cat1": 77,
      "cat2": 48,
      "cat3": 83,
      "cat4": 97,
      "cat5": 44,
      "cat6": 75,
      "photo": "spiderman.jpg"
   },
    {
      "cardId": 11,
      "name": "Magneto",
      "cat1": 34,
      "cat2": 65,
      "cat3": 62,
      "cat4": 54,
      "cat5": 80,
      "cat6": 75,
      "photo": "magneto.jpg"
   },
   {
      "cardId": 12,
      "name": "Sabertooth",
      "cat1": 15,
      "cat2": 98,
      "cat3": 27,
      "cat4": 52,
      "cat5": 87,
      "cat6": 1,
      "photo": "sabertooth.jpg"
   },
   {
      "cardId": 13,
      "name": "Black Widow",
      "cat1": 45,
      "cat2": 51,
      "cat3": 93,
      "cat4": 79,
      "cat5": 66,
      "cat6": 72,
      "photo": "rominoff.jpg"
   },
   {
      "cardId": 14,
      "name": "Rogue",
      "cat1": 22,
      "cat2": 18,
      "cat3": 79,
      "cat4": 80,
      "cat5": 72,
      "cat6": 42,
      "photo": "rogue.jpg"
   },
   {
      "cardId": 15,
      "name": "Robin",
      "cat1": 32,
      "cat2": 8,
      "cat3": 15,
      "cat4": 89,
      "cat5": 2,
      "cat6": 41,
      "photo": "robin.jpg"
   },
   {
      "cardId": 16,
      "name": "Reverse Flash",
      "cat1": 100,
      "cat2": 68,
      "cat3": 32,
      "cat4": 92,
      "cat5": 82,
      "cat6": 77,
      "photo": "reverseflash.jpg"
   },
   {
      "cardId": 17,
      "name": "Hulk",
      "cat1": 19,
      "cat2": 100,
      "cat3": 66,
      "cat4": 25,
      "cat5": 69,
      "cat6": 29,
      "photo": "hulk.jpg"
   },
   {
      "cardId": 18,
      "name": "Heman",
      "cat1": 45,
      "cat2": 100,
      "cat3": 50,
      "cat4": 18,
      "cat5": 71,
      "cat6": 31,
      "photo": "heman.jpg"
   },
   {
      "cardId": 19,
      "name": "Harley Quinn",
      "cat1": 26,
      "cat2": 20,
      "cat3": 99,
      "cat4": 80,
      "cat5": 28,
      "cat6": 79,
      "photo": "harleyquinn.jpg"
   },
   {
      "cardId": 20,
      "name": "Green Goblin",
      "cat1": 62,
      "cat2": 51,
      "cat3": 57,
      "cat4": 78,
      "cat5": 42,
      "cat6": 39,
      "photo": "greengoblin.jpg"
   },
   {
      "cardId": 21,
      "name": "Deadpool",
      "cat1": 41,
      "cat2": 48,
      "cat3": 99,
      "cat4": 69,
      "cat5": 59,
      "cat6": 73,
      "photo": "deadpool.jpg"
   },
   {
      "cardId": 22,
      "name": "Cyclops",
      "cat1": 37,
      "cat2": 29,
      "cat3": 36,
      "cat4": 41,
      "cat5": 38,
      "cat6": 27,
      "photo": "cyclops.jpg"
   },
   {
      "cardId": 23,
      "name": "Catwomen",
      "cat1": 45,
      "cat2": 26,
      "cat3": 55,
      "cat4": 85,
      "cat5": 34,
      "cat6": 91,
      "photo": "catwoman.jpg"
   },
   {
      "cardId": 24,
      "name": "Captain America",
      "cat1": 68,
      "cat2": 75,
      "cat3": 79,
      "cat4": 69,
      "cat5": 82,
      "cat6": 56,
      "photo": "camerica.jpg"
   },
   {
      "cardId": 25,
      "name": "Beast",
      "cat1": 32,
      "cat2": 78,
      "cat3": 73,
      "cat4": 30,
      "cat5": 65,
      "cat6": 97,
      "photo": "beast.jpg"
   },
   {
      "cardId": 26,
      "name": "Batman",
      "cat1": 40,
      "cat2": 37,
      "cat3": 98,
      "cat4": 87,
      "cat5": 39,
      "cat6": 97,
      "photo": "batman.jpg"
   },
   {
      "cardId": 27,
      "name": "Bane",
      "cat1": 12,
      "cat2": 93,
      "cat3": 41,
      "cat4": 8,
      "cat5": 93,
      "cat6": 13,
      "photo": "bane.jpg"
   },
   {
      "cardId": 28,
      "name": "Green Arrow",
      "cat1": 42,
      "cat2": 24,
      "cat3": 87,
      "cat4": 74,
      "cat5": 38,
      "cat6": 95,
      "photo": "arrow.jpg"
   },
   {
      "cardId": 29,
      "name": "Antman",
      "cat1": 67,
      "cat2": 45,
      "cat3": 78,
      "cat4": 85,
      "cat5": 42,
      "cat6": 82,
      "photo": "antman.jpg"
   },
   {
      "cardId": 30,
      "name": "Mystique",
      "cat1": 45,
      "cat2": 12,
      "cat3": 82,
      "cat4": 88,
      "cat5": 35,
      "cat6": 62,
      "photo": "mystique.jpg"
   }];




/*
    shuffle the cards and assign the cards to each player
*/
function shufflecards() {
    //reperesents the total amount of a users cards
    var amount = cards.length;
    var randomCard;
    var tempCard;
    //loops through all the users cards
    while (amount) {
        //gets a random card based on the amount of cards remaining and decreates amount val
        randomCard = Math.random() * amount-- | 0;
        //hold a card using a tempary index
        tempCard = cards[amount];
        //places a new card in the location the temp card we just stored is 
        cards[amount] = cards[randomCard];
        //buts the temp card in the postion of the car we jsut rearranged
        cards[randomCard] = tempCard;
    }
    //console.log(cards);
    //this.p1cards = cards.splice(0,15);
    console.log(cards.length);
   // this.p2cards = cards;
    
    return cards;
}



//exports the Game objects for other classes to use
module.exports = Game;





