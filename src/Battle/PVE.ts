import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _enemys: SimpleFighter[];

  constructor(fighterPlayer: Fighter, enemys: SimpleFighter[]) {
    super(fighterPlayer);
    this._enemys = enemys;
  }

  private pk(): boolean {
    return this.player.lifePoints <= -1 || this._enemys
      .every((e) => e.lifePoints <= -1);
  }

  fight(): number {
    while (!this.pk()) {
      const aliveEnemys = this._enemys.filter((e) => e.lifePoints > 0);
      aliveEnemys.forEach((enemy) => {
        this.player.attack(enemy);
        if (enemy.lifePoints > 0) {
          enemy.attack(this.player);
        }
      });
    }
    return super.fight();
  }
}

export default PVE;