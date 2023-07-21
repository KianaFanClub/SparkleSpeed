import { Button, Space } from 'antd';
import { createSearchParams, Link, useNavigate } from 'umi';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <p>
        <Link to="/user">Go to user page</Link>
      </p>
      <Link to="/user">Go to user page</Link>
      <Space>
        <Button
          onClick={() => navigate(`/user/?${createSearchParams({ a: '10' })}`)}
          type={'primary'}
        >
          跳转用户页面
        </Button>
        <Button
          onClick={() => navigate(`/user`, { state: { b: 'bTest' } })}
          type={'primary'}
        >
          跳转用户页面
        </Button>
      </Space>
    </div>
  );
}
