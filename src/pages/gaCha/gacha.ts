import { random } from '@/utils/random';
import { GaChaCardInfos } from '@/pages/gaCha/card-info';
import { CardLevel, CardResult, CardType } from '@/pages/gaCha/type';

class BaseGaCha {
  // 初始
  protected baseCardInfos: GaChaCardInfos[];
  protected cardInfos: GaChaCardInfos[] = [];

  protected totalProbability = 1;
  protected probabilityList = [1];

  rollCount = 0;

  protected guaranteeCount = 330;

  rollResult: CardResult[] = [];

  constructor(baseCardInfos: GaChaCardInfos[]) {
    this.baseCardInfos = baseCardInfos;
    this.unLockProbability();
  }

  rollTen() {
    for (let i = 0; i < 10; i++) {
      this.rollOne();
    }
  }

  rollOne() {
    this.rollCount += 1;

    if (this.rollCount === this.guaranteeCount) {
      return;
    }

    this.rollResult.push(this.randomCard()!);
    if (this.rollCount % 10 === 0) {
      // 锁定
      this.lockProbability(3, 4);
      this.rollOne();
      this.unLockProbability();
    }
  }

  protected randomCard() {
    const curProbability = random.number(this.totalProbability);
    for (let i = 0; i < this.probabilityList.length; i++) {
      if (this.probabilityList[i] > curProbability) {
        return this.cardInfos[i].getResult();
      }
    }
  }

  protected unLockProbability() {
    this.cardInfos = this.baseCardInfos;
    this.setTotalProbability();
  }

  protected lockProbability(
    roleLockLevel: number = Infinity,
    equipLockLevel: number = Infinity,
  ) {
    this.cardInfos = this.baseCardInfos.filter(
      (v) =>
        (v.type === 'role' && v.level >= roleLockLevel) ||
        (v.type === 'equip' && v.level >= equipLockLevel),
    );
    this.setTotalProbability();
  }

  protected setTotalProbability() {
    this.totalProbability = this.cardInfos.reduce(
      (t, v) => t + v.probability,
      0,
    );
    let probability = 0;
    this.probabilityList = this.cardInfos.map(
      (x, i) => (probability += x.probability),
    );
  }
}

class goldGaCha extends BaseGaCha {
  constructor() {
    super(new GaChaCardInfos());
  }
}
