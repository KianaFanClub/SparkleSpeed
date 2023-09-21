import GaChaChart from '@/pages/gaCha/GaChaChart';
import { Card, Col, Form, Row, Select } from 'antd';
import { FC } from 'react';

type GaChaProps = {};

const rollCountOption = [
  { label: '一次', value: 1 },
  { label: '十次', value: 10 },
  { label: '一百次', value: 100 },
];

function onChange() {}

const GaCha: FC = (props: GaChaProps) => {
  const [form] = Form.useForm<{ coupon: number; stone: number }>({
    coupon: 1,
    stone: 20,
  });
  const couponValue = Form.useWatch('coupon', form);
  return (
    <>
      <Card>
        <Form>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="coupon" label="次数">
                <Select
                  showSearch
                  placeholder={'请选择'}
                  options={rollCountOption}
                ></Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {form.getFieldInstance('coupon')}

        <Row gutter={16}>
          {couponValue}
          <Col span={24}>
            <GaChaChart></GaChaChart>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GaCha;
