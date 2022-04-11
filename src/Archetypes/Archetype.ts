export default abstract class Archetype {
  constructor(
    private innerName: string,
    private innerSpecial: number = 0,
    private innerCost: number = 0,
  ) {
    this.innerName = innerName;
  }

  get name(): string {
    return this.innerName;
  }

  get special(): number {
    return this.innerSpecial;
  }

  get cost(): number {
    return this.innerCost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}