import dayjs from 'dayjs';
import { WorldLevel } from '@/pages/ap/base/type';

class PioneersExp {
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
  levelExpMap: Map<number, { curExp: number; totalExp: number }> = new Map([
    [43, { curExp: 4100, totalExp: 410000 }],
  ]);

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
    const wLevel = this.getWorldLevel();
    if (wLevel >= this.worldLevelArr[0]) return;

    const nextLevel = this.worldLevelUpMap.get((wLevel + 1) as WorldLevel)!;

    const nextLevelTotalExp = this.levelExpMap.get(nextLevel)!.totalExp;
    const curLevelTotalExp = this.levelExpMap.get(this.level)!.totalExp + this.exp;
    return nextLevelTotalExp - curLevelTotalExp;
  }

  getCurLevelExp(){
    return this.levelExpMap.get(this.level)!
  }

  addExp(exp: number) {
    this.exp += exp;
    let curLevelExp = this.getCurLevelExp().curExp
    while (this.exp >= curLevelExp){
      this.levelUp()
      this.exp = this.exp - curLevelExp
      curLevelExp = this.getCurLevelExp().curExp
    }
  }

  levelUp() {
    this.level++;
  }
}
