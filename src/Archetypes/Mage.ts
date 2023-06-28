import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _damage: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Mage._createdInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }
}

export default Mage;