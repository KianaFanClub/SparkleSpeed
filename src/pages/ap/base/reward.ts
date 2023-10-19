import { Reward } from '@/pages/ap/base/type';

export class MissionReward {
  ap: number;
  gold: number;
  purple: number;
  blue: number;
  green: number;
  pioneersExp: number;
  money: number;

  constructor(ap = 0, gold = 0, purple = 0, blue = 0, green = 0, money = 0) {
    this.ap = ap;
    this.gold = gold;
    this.purple = purple;
    this.blue = blue;
    this.green = green;
    this.pioneersExp = ap * 5;
    this.money = 0;
  }

  clone() {
    return new MissionReward(
      this.ap,
      this.gold,
      this.purple,
      this.blue,
      this.green,
      this.money,
    );
  }

  getReward(times = 1): Reward {
    const gold = this.gold * times;
    const purple = this.purple * times;
    const blue = this.blue * times;
    const green = this.green * times;
    const pioneersExp = this.pioneersExp * times;
    const money = this.money * times;
    return { gold, purple, blue, green, pioneersExp, money };
  }
}
