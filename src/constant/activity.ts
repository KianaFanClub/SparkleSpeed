class BaseActivity {
  name: string;
  id: number;
  startTime: string;
  endTime: string;
  type: 'c' | 'j';
}

class QuestActivity extends BaseActivity {
  rewards = [
    {}
  ];

  constructor() {
    super();
  }
}
