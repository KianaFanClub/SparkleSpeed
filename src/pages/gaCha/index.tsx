import { FC } from 'react';
import { Card, Col, Row, Select } from 'antd';
import GaChaChart from '@/pages/gaCha/GaChaChart';

type GaChaProps = {}

const rollCountOption = [
  { label: '一次', value: 1 },
  { label: '十次', value: 10 },
  { label: '一百次', value: 100 },
];
function onChange() {

}

const GaCha: FC = (props: GaChaProps) => {
  return (
    <>
      <Card >
        <Row gutter={16}>
          <Col span={10}>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder={'请选择'}
              onChange={onChange}
              options={rollCountOption}
            ></Select>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <GaChaChart></GaChaChart>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GaCha;
