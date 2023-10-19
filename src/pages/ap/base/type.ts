export type WorldLevel = 3 | 4 | 5 | 6;
export type MissionType =
  | 'money'
  | 'roleExp'
  | 'equipExp'
  | 'material'
  | 'outEquip'
  | 'innerEquip';

export type RewardType =
  | 'green'
  | 'blue'
  | 'purple'
  | 'gold'
  | 'money'
  | 'pioneersExp';

export type Reward = Record<RewardType, number>;

export type RewardMap = Map<WorldLevel, MissionReward>;
