export type CardLevel = 3 | 4 | 5;

export type CardType = 'role' | 'equip';
export type CardResult = { type: CardType; level: CardLevel };
export type BaseProbability = { probability: number; upProbability: number };

// base为正常，big为保底，ten为无3无4，tenRole为无3有4，tenCard为有3无4
export type PoolType = 'base' | 'ten' | 'tenRole' | 'tenCard' | 'big';
