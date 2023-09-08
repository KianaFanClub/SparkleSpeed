class CardInfo {
  level: 1 | 2 | 3 | 4 | 5;
  type: 'role' | 'equip';
  probability: number;

  constructor(
    level: 1 | 2 | 3 | 4 | 5,
    type: 'role' | 'equip',
    probability: number,
  ) {
    this.level = level;
    this.type = type;
    this.probability = probability;
  }
}

class BaseGaCha {
  cardList: CardInfo[];

  rollCount = 0;

  rollResult: Map<CardInfo, number>;

  constructor(cardList: CardInfo[]) {
    this.cardList = cardList;
    this.rollResult = new Map(this.cardList.map((x, i) => ([x,0])))
  }

  rollTen() {
    this.rollCount += 11;
  }

  /*rollOne() {
    this.rollCount += 1;
    if (this.rollCount % 10 === 0) this.rollOne();
  }*/
}

const goldGaChaCard = [
  new CardInfo(5, 'role', 0.01),
  new CardInfo(4, 'role', 0.03),
  new CardInfo(3, 'role', 0.4),
  new CardInfo(5, 'equip', 0.04),
  new CardInfo(4, 'equip', 0.12),
  new CardInfo(3, 'equip', 0.4),
];

class goldGaCha extends BaseGaCha {
  constructor() {
    super(goldGaChaCard);
  }
}
