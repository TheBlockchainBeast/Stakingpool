import { Row, Col, Input, Pagination } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./launchpad.css";
import Cards from "./components/Cards";

export default function Presale() {
  return (
    <div>
      <h1 className="projects">Projects Open Now</h1>
      <p style={{ textAlign: "center" }}>No projects currently open</p>
      <h1 className="projects">Projects Coming soon</h1>
      <p style={{ textAlign: "center" }}>No projects currently</p>
      <h1 className="projects">Projects Closed</h1>
      <div className="inputs">
        <Input
          className="input"
          size="large"
          placeholder="Project Name"
          prefix={<SearchOutlined />}
        />
      </div>
      <Row>
        <Col lg={12} md={12} sm={24} style={{ marginLeft: "40px" }}>
          <Cards />
        </Col>
      </Row>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
