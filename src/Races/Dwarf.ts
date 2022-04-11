import Race from './Race';

export default class Dwarf extends Race {
  private static numberOfInstances = 0;
  private lifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.incrementInstance();
  }

  static incrementInstance = (): void => {
    this.numberOfInstances += 1;
  };

  static createdRacesInstances(): number {
    return this.numberOfInstances;
  }

  get maxLifePoints(): number {
    return this.lifePoints;
  }
}