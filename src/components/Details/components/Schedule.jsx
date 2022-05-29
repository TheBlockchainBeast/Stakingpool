import { Table } from "antd";
function Schedule() {
  const dataSource = [
    {
      key: "1",
      round: "Allocation",
      opens: "2022-01-11 08:00:00 UTC",
      closes: "2022-01-11 12:45:00 UTC",
    },
    {
      key: "2",
      round: "FCFS - Prepare",
      opens: "2022-01-11 12:45:00 UTC",
      closes: "2022-01-11 13:00:00 UTC",
    },
    {
      key: "3",
      round: "FCFS - Start",
      opens: "2022-01-11 13:00:00 UTC",
      closes: "2022-01-11 14:00:00 UTC",
    },
  ];

  const columns = [
    {
      title: "Round",
      dataIndex: "round",
      key: "round",
    },
    {
      title: "Opens",
      dataIndex: "opens",
      key: "opens",
    },
    {
      title: "Closes",
      dataIndex: "closes",
      key: "closes",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
export default Schedule;
