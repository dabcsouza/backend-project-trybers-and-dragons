import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static numberOfInstances = 0;
  private powerType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.incrementInstance();
  }

  static incrementInstance = (): void => {
    this.numberOfInstances += 1;
  };

  static createdArchetypeInstances(): number {
    return this.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this.powerType;
  }
}