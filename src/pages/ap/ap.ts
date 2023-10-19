type WorldLevel = 3 | 4 | 5 | 6;
type MissionType = 'money' | 'roleExp' | 'equipExp' | 'material' | 'outEquip' | 'innerEquip';

type RewardType = 'green' | 'blue' | 'purple' | 'gold' | 'money' | 'masterExp';

type Reward = Record<RewardType, number>;

class MissionReward {
  ap: number;
  gold: number;
  purple: number;
  blue: number;
  green: number;
  masterExp: number;
  money: number;

  constructor(ap = 0, gold = 0, purple = 0, blue = 0, green = 0, money = 0) {
    this.ap = ap;
    this.gold = gold;
    this.purple = purple;
    this.blue = blue;
    this.green = green;
    this.masterExp = ap * 5;
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
    const masterExp = this.masterExp * times;
    const money = this.money * times;
    return { gold, purple, blue, green, masterExp, money };
  }
}

type RewardObj = Map<WorldLevel, MissionReward>;

abstract class BaseMission {
  type: MissionType;
  rewardObj: RewardObj;

  protected ap: number;

  protected constructor(ap: number, type: MissionType, rewardMap: RewardObj) {
    this.ap = ap;
    this.type = type;
    this.rewardObj = rewardMap;
  }

  getReward(worldLevel: WorldLevel, ap: number = 0, times = 0) {
    return this.getRewardResult(worldLevel, ap / this.ap + times);
  }

  clone() {}

  protected getRewardResult(worldLevel: WorldLevel, times: number) {
    return this.rewardObj.get(worldLevel)!.getReward(times);
  }
}

function createRewardObj(
  reward3: MissionReward,
  reward4: MissionReward,
  reward5: MissionReward,
  reward6: MissionReward,
): RewardObj {
  return new Map([
    [3, reward3],
    [4, reward4],
    [5, reward5],
    [6, reward6],
  ]);
}

class OutEquipMission extends BaseMission {
  constructor() {
    super(
      40,
      'outEquip',
      createRewardObj(
        new MissionReward(40),
        new MissionReward(40),
        new MissionReward(40),
        new MissionReward(40),
      ),
    );
  }
}

class masterExp {
  level = 43;
  exp = 0;

  time = dayjs();
  dailyMasterExp = 290 * 5;
  worldLevelUpMap: Map<WorldLevel, number> = new Map([
    [3, 40],
    [4, 50],
    [5, 60],
    [6, 65],
  ]);
  worldLevelArr = [...this.worldLevelUpMap.keys()].sort((a, b) => b - a);
  levelExpMap: Map<number, {curExp:number,totalExp:number}> = new Map([[43, { curExp:4100,totalExp:410000 }]]);

  constructor(level: number, exp: number) {
    this.level = level;
    this.exp = exp;
  }

  getWorldLevel(): WorldLevel {
    for (let i = 0; i < this.worldLevelArr.length; i++) {
      let worldLevel = this.worldLevelArr[i];
      const upLevel = this.worldLevelUpMap.get(worldLevel)!;
      if (this.level >= upLevel) {
        return worldLevel;
      }
    }
    return 3;
  }

  getExpToNextLevel() {
    const levelExp = this.levelExpMap.get(this.level)!;
    return levelExp.curExp - this.exp;
  }

  getExpToNextWorldLevel() {
    const wLevel = this.getWorldLevel()
    if (wLevel>=this.worldLevelArr[0]) return;

    const nextLevel = this.worldLevelUpMap.get(wLevel+1 as WorldLevel)!

    const nextLevelExp = this.levelExpMap.get(nextLevel)!.totalExp
    const curLevelExp = this.levelExpMap.get(this.level)!.totalExp+this.exp
    return nextLevelExp-curLevelExp
  }
}
