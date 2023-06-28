import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _damage: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'stamina';
    Warrior._createdInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }

  static createdArchetypeInstances(): number {
    return Warrior._createdInstances;
  }
}

export default Warrior;