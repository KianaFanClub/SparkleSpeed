export type CardLevel = '3' | '4' | '5';

export type CardType = 'role' | 'equip';
export type CardResult = { type: CardType; level: CardLevel };
export type BaseProbability = { probability: number; upProbability: number };
