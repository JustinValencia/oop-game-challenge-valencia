function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function (xp) {
    this.points += xp; 

    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }

    console.log(this.describe());
}

Player.prototype.describe = function () {
    return '${this.name} is level ${this.lvl} with ${this.points} experience points';
}

const player1 = new Player('Justin');
const player2 = new Player('Pamela');

player1.gainXp(1);
player2.gainXp(2);
player1.gainXp(4);
player2.gainXp(3);


