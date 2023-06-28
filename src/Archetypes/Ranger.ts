import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _damage: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Ranger._createdInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }
}

export default Ranger;