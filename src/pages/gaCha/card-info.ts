import {
  BaseProbability,
  CardLevel,
  CardResult,
  CardType,
} from '@/pages/gaCha/type';

const levelList: CardLevel[] = ['3', '4', '5'];

function cProbability(
  probability: number,
  upProbability: number,
): BaseProbability {
  return { probability, upProbability };
}

class CardInfo {
  level: CardLevel;
  type: 'role' | 'equip';
  probability: number;
  // up的idx，0为非up
  upIdx: number = 0;
  protected baseProbability: number;

  constructor(
    level: CardLevel,
    type: CardType,
    probability: number,
    upIdx: number = 0,
  ) {
    this.level = level;
    this.type = type;
    this.baseProbability = probability;
    this.probability = probability;
    this.upIdx = upIdx;
  }

  setProbability(probability: number) {
    this.probability = probability;
  }

  initProbability() {
    this.setProbability(this.baseProbability);
  }

  getResult(): CardResult {
    return { type: this.type, level: this.level };
  }
}

export class GaChaCardInfos {
  cardInfos: CardInfo[];

  baseProbability: Record<CardType, Record<CardLevel, BaseProbability>> = {
    equip: {
      '3': cProbability(0.4, 0.08),
      '4': cProbability(0.12, 0.04),
      '5': cProbability(0.04, 0.028),
    },
    role: {
      '3': cProbability(0.4, 0.04),
      '4': cProbability(0.03, 0.015),
      '5': cProbability(0.01, 0.008),
    },
  };

  constructor(roleUp:number[] = [1, 1, 1], equipUp:number[] = [1, 1, 1]) {
    this.cardInfos = this.createCardInfos(roleUp, equipUp);
  }

  createCardInfos(roleUp: number[], equipUp: number[]) {
    return [
      ...this.createCardInfosWithType('role', ...roleUp),
      ...this.createCardInfosWithType('equip', ...roleUp),
    ];
  }

  createCardInfosWithType(
    type: CardType,
    fiveUpCount = 1,
    fourUpCount = 1,
    threeUpCount = 1,
  ) {
    const upCountObj: Record<CardLevel, number> = {
      '3': threeUpCount,
      '4': fourUpCount,
      '5': fiveUpCount,
    };

    const res = [];

    for (const level of levelList) {
      const upCount = upCountObj[level];
      const { upProbability, probability } = this.baseProbability[type][level];
      for (let i = 0; i < upCount; i++) {
        res.push(new CardInfo(level, type, upProbability, i + 1));
      }
      const remainProbability = probability - upProbability * upCount;
      res.push(new CardInfo(level, type, remainProbability));
    }
    return res;
  }
}
