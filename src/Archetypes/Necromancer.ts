import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _baseDamage: EnergyType;
  private static populationInstance = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer.populationInstance += 1;
    return Necromancer.populationInstance;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Necromancer;