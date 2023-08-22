import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _baseDamage: EnergyType;
  private static populationInstance = 0;

  constructor(name: string) {
    super(name);
    this._baseDamage = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger.populationInstance += 1;
    return Ranger.populationInstance;
  }

  get energyType(): EnergyType {
    return this._baseDamage;
  }
}

export default Ranger;