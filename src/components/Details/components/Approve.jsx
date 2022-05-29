import { Button, InputNumber } from "antd";
function Approve() {
  return (
    <>
      <p>BRISE AMOUNT:</p>
      <InputNumber
        min={1}
        max={10}
        defaultValue={3}
        className="input"
        size="large"
      />
      <Button type="primary" shape="round" className="approve2" size="large">
        APPROVE
      </Button>
    </>
  );
}
export default Approve;
