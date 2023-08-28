import { FC } from 'react';
import { useModel } from 'umi';

type materialProps = object;

const material: FC<materialProps> = (props) => {
  const { count } = useModel('material');
  return <>{count.gold}</>;
};

export default material;
