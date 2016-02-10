var careers = [];
var Career = function(career, ws, bs, str, tou, agi, gear) {
    this.name = career;
    this.weaponSkill = ws;
    this.ballisticSkill = bs;
    this.strength = str;
    this.toughness = tou;
    this.agility = agi;
    this.gear = gear;
    careers.push(this.name);
};