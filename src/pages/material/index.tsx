import { FC } from 'react';
import { useModel } from '@@/exports';
import { Col, Row, Select } from 'antd';
import MaterialShop from '@/pages/material/shop';

type materialProps = object;

function onChange() {}

const options = [{ label: '当前', value: 0 }];

const material: FC<materialProps> = (props) => {
  const { count } = useModel('material');
  return (
    <>
      <Row gutter={16}>
        <Col span={10}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder={'请选择'}
            onChange={onChange}
            options={options}
          ></Select>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={10}>
          <MaterialShop />
        </Col>
      </Row>
    </>
  );
};

export default material;
