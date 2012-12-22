// add an actual random number generator to JS.  Returns a random number between x and y

function randInt(x,y){
    return Math.floor(Math.random()*y+x);
}

// rolls a bunch of "dice" to create a probability curve. "Dice" have values 1 through x, and y are rolled. Dependent on randInt.

function roll(x, y){
    total = 0
    for (i = 0; i++; i < y){
        total += randInt(1,x);
        }
    return total;
}