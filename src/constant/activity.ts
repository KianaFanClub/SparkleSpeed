class BaseActivity {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
}

class QuestActivity extends BaseActivity {
  rewards = [];

  constructor() {
    super();
  }
}
