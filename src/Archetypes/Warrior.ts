import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _baseDamage: EnergyType;
  private static populationInstance = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'mana';
  }

  static createdArchetypeInstances(): number {
    Warrior.populationInstance += 1;
    return Warrior.populationInstance;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Warrior;