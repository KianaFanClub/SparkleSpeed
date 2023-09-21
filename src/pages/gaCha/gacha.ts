import { CardPool } from '@/pages/gaCha/card-pool';
import { CardResult, PoolType } from '@/pages/gaCha/type';
import { random } from '@/utils/random';

export class GaCha {
  rollCount: number;
  rollResult: CardResult[] = [];
  cardPool: CardPool;

  hasUpFiveRole = false;

  protected guaranteeCount = 330;

  constructor(
    rollCount = 0,
    roleUp: number[] = [1, 1, 1],
    equipUp: number[] = [1, 1, 1],
  ) {
    this.rollCount = rollCount;
    this.cardPool = new CardPool(roleUp, equipUp);
  }

  rollTen() {
    let res: CardResult[] = [];

    let hasOverThreeRole = false;
    let hasOverFourCard = false;
    for (let i = 0; i < 11; i++) {
      const card = this.roll(true, hasOverThreeRole, hasOverFourCard, i === 10);
      if (card.level >= 3 && card.type === 'role') hasOverThreeRole = true;
      if (card.level >= 4) hasOverFourCard = true;
      res.push(card);
    }
    this.rollResult.push(...res);
  }

  rollOne() {
    let res: CardResult[] = [];

    res.push(this.roll());
    if (this.rollCount % 11 === 10) {
      res.push(this.roll());
    }

    this.rollResult.push(...res);
  }

  protected roll(
    isTenRole = false,
    hasOverThreeRole = false,
    hasOverFourCard = false,
    isLast = false,
  ): CardResult {
    this.rollCount += 1;

    let poolType: PoolType = 'base';
    if (this.rollCount === this.guaranteeCount && !this.hasUpFiveRole) {
      poolType = 'big';
    } else if (isTenRole && isLast) {
      if (hasOverFourCard) {
        poolType = hasOverThreeRole ? 'base' : 'tenRole';
      } else {
        poolType = hasOverThreeRole ? 'tenCard' : 'ten';
      }
    }

    return this.randomCard(poolType);
  }

  protected randomCard(type: PoolType = 'base') {
    const curPool = this.cardPool.getCurPool(type);
    const { total, probabilityList, cardInfos } = curPool;

    const curProbability = random.number(total);
    for (let i = 0; i < probabilityList.length; i++) {
      if (probabilityList[i] > curProbability) {
        return cardInfos[i].getResult();
      }
    }
    return {} as CardResult;
  }
}
