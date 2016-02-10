var races = [];
var Race = function(race, ws, bs, str, tou, agi, w) {
    this.name = race;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.wounds = w;
    races.push(this.name);
};