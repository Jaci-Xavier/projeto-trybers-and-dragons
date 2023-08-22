import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _baseDamage: EnergyType;
  private static populationInstance = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage.populationInstance += 1;
    return Mage.populationInstance;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Mage;