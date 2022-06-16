import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./launchpad.css";
import Yfih2Yfio2 from "./components/YFIH2-YFIO2";
import Yfih2Busd from "./components/YFIH2-BUSD";
import Yfio2Busd from "./components/YFIO2-BUSD";

export default function Pools() {
  return (
    <div>
      <h1 className="projects">Pools Open Now</h1>
      <Row style={{ marginLeft: "40px", marginRight: "40px" }}>
        <Col lg={9} md={12} sm={24}>
          <Yfih2Yfio2 />
        </Col>
      </Row>
      {/* <p style={{ textAlign: "center" }}>No projects currently open</p> */}
      <h1 className="projects">Pools Coming soon</h1>
      {/* <p style={{ textAlign: "center" }}>No pools currently</p> */}
      <Row
        style={{ marginLeft: "40px", marginRight: "40px" }}
        // justify="space-around"
        gutter={10}
      >
        <Col lg={8} md={11} sm={24}>
          <Yfih2Busd />
        </Col>
        <Col lg={8} md={11} sm={24}>
          <Yfio2Busd />
        </Col>
      </Row>

      <h1 className="projects">Pools Closed</h1>
      <div className="inputs">
        <Input
          className="input"
          size="large"
          placeholder="Project Name"
          prefix={<SearchOutlined />}
        />
      </div>
      <p style={{ textAlign: "center", marginBottom: "100px" }}>
        No pools currently closed
      </p>
      {/* <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div> */}
    </div>
  );
}
