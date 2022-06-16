import { Card, Row, Col, Avatar } from "antd";
import {
  TwitterOutlined,
  MediumOutlined,
  ChromeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "../launchpad.css";

const styles = {
  card: {
    background: "#0F6939",
    borderRadius: "12px",
    margin: "0px 40px 40px 0px",
    color: "#ffffff",
    width: "100%",
  },
  text: {
    color: "#ffffff",
  },
};

export default function Cards() {
  return (
    <Card style={styles.card} className="card">
      <Row>
        <Col span={8}>
          <Avatar shape="square" size={70} src="/Busd-yfio2.png" />
        </Col>
        <Col span={12}>
          <div>
            <h1>Earn BUSD</h1>
            <h3>Stake YFIO2</h3>
          </div>
          <div className="icons">
            <Avatar className="icon" size={28} icon={<TwitterOutlined />} />
            <Avatar className="icon" size={28} icon={<MediumOutlined />} />
            <Avatar className="icon" size={28} icon={<ChromeOutlined />} />
            <Avatar className="icon" size={28} icon={<GithubOutlined />} />
          </div>
          <div className="buttons">
            <a className="coming">Coming</a>
            <a className="brise">BSC</a>
          </div>
        </Col>
      </Row>
      {/* <p className="desc">
          H2.finance was born to collaborate and help on the Sustainable
          Development Goals, SDGs, from the 2030 agenda objectives of United
          Nations.
        </p> */}
      {/* <div className="swap">
          <p>Total Staked</p>
          <p>0</p>
        </div> */}
    </Card>
  );
}
