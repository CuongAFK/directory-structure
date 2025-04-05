class Unit {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  attackTarget(target) {
    target.health -= this.attack;
  }
}

module.exports = Unit;
