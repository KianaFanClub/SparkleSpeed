import { Button, Space } from 'antd';
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'umi';

function judgeDisplay(test) {
  return true;
}
const e = judgeDisplay('fef');
const UserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { b: string };

  const [searchParams, setSearchParams] = useSearchParams();

  const a = searchParams.get('a');

  return (
    <div>
      <p>This is user page.</p>
      <Space>
        <Button onClick={() => navigate('/')} type="primary">
          返回
        </Button>
        <Button
          onClick={() => setSearchParams(createSearchParams({ a: 'test' }))}
          type="primary"
        >
          设置url参数a
        </Button>
        <Button
          onClick={() => setSearchParams(createSearchParams({ b: 'test' }))}
          type="primary"
        >
          设置url参数b
        </Button>
      </Space>
      <p>{a}</p>
      <p>{state?.b}</p>
    </div>
  );
};

export default UserPage;
