export default abstract class Race {
  constructor(private innerName: string, public dexterity: number) {
    this.innerName = innerName;
    this.dexterity = dexterity;
  }

  get name(): string {
    return this.innerName;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}