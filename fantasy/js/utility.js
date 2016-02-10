var rollDie = function(sides) {
    if (!sides) {
        sides = 10;
    }
    return Math.floor(Math.random() * sides) + 1;
};

var rollDice = function(quantity, sides) {
    var total = 0;
    for (i = 0; i < quantity; i++) {
        total += rollDie(sides);
    }
    return total;
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}