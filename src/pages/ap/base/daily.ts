import { mission } from '@/pages/ap/base/mission';

export class Daily {
  masterExp = 290 * 5;
  ap = 240;
}

export class Weekly {
  times = 5;

  getReward = () => mission.innerEquip.getReward(3, 4);
}
