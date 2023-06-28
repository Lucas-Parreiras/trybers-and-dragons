import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._createdInstances += 1;
  }

  get energyType(): EnergyType { return this._damage; }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }
}

export default Necromancer;