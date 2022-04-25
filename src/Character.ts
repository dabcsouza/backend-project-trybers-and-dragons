import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name!: string;
  private _archetype!: Archetype;
  private _defense!: number;
  private _dexterity!: number;
  private _energy!: Energy;
  private _lifePoints!: number;
  private _maxLifePoints!: number;
  private _race!: Race;
  private _strength!: number;

  get strength() {
    return this._strength;
  }

  get race() {
    return this._race;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get energy() {
    return { ...this._energy };
  }
  
  get dexterity() {
    return this._dexterity;
  }

  get name() {
    return this._name;
  }

  get defense() {
    return this._defense;
  }

  get archetype() {
    return this._archetype;
  }

  constructor(name: string) {
    this._name = name;
    this._race = new Elf(this._name, 10);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: new Mage(this._name).energyType,
      amount: getRandomInt(1, 10),
    };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this
      ._strength * (1 + (getRandomInt(20, 110) / 100)));
  }

  levelUp(): void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = newMaxLifePoints > this._race.maxLifePoints
      ? this.race.maxLifePoints 
      : newMaxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = {
      ...this._energy,
      amount: 10,
    };
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this.handleDamage(damage);
    return this._lifePoints;
  }

  handleDamage = (damage: number): void => {
    if (damage > 0) this.handleLifePoints(damage);
  };

  handleLifePoints = (damage: number): void => {
    if (this._lifePoints > 0) {
      if (this._lifePoints - damage <= 0) {
        this._lifePoints = -1; 
      } else this._lifePoints -= damage;
    }
  };
}