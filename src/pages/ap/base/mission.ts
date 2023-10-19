import { MissionReward } from '@/pages/ap/base/reward';
import { MissionType, RewardMap, WorldLevel } from '@/pages/ap/base/type';

class BaseMission {
  type: MissionType;
  rewardMap: RewardMap;

  protected ap: number;

  constructor(ap: number, type: MissionType, rewardMap: RewardMap) {
    this.ap = ap;
    this.type = type;
    this.rewardMap = rewardMap;
  }

  getReward(worldLevel: WorldLevel, ap: number = 0, times = 0) {
    return this.getRewardResult(worldLevel, ap / this.ap + times);
  }

  clone() {}

  protected getRewardResult(worldLevel: WorldLevel, times: number) {
    return this.rewardMap.get(worldLevel)!.getReward(times);
  }
}

function createRewardObj(
  reward3: MissionReward,
  reward4: MissionReward,
  reward5: MissionReward,
  reward6: MissionReward,
): RewardMap {
  return new Map([
    [3, reward3],
    [4, reward4],
    [5, reward5],
    [6, reward6],
  ]);
}

const outEquipMission = new BaseMission(
  40,
  'outEquip',
  createRewardObj(
    new MissionReward(40),
    new MissionReward(40),
    new MissionReward(40),
    new MissionReward(40),
  ),
);

const innerEquipMission = new BaseMission(
  40,
  'innerEquip',
  createRewardObj(
    new MissionReward(40),
    new MissionReward(40),
    new MissionReward(40),
    new MissionReward(40),
  ),
);
export const mission = {
  outEquip:outEquipMission,
  innerEquip:innerEquipMission
}
