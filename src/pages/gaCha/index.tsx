import GaChaChart from '@/pages/gaCha/GaChaChart';
import { Card,Col,Form,Row,Select } from 'antd';
import { FC } from 'react';


type GaChaProps = {};
const rollCountOption = [
  { label: '一次', value: 1 },
  { label: '十次', value: 10 },
  { label: '一百次', value: 100 },
];

type Form = { coupon: number; stone: number; };
const GaCha: FC = (props: GaChaProps) => {
  const [form] = Form.useForm<Form>();
  const couponValue = Form.useWatch('coupon', form);
  return (
    <>
      <Card>
        <Form form={form}>
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="coupon" label="次数" initialValue={1}>
                <Select
                  showSearch
                  placeholder={'请选择'}
                  options={rollCountOption}
                ></Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
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
