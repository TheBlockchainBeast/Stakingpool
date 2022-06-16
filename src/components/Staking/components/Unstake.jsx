import { Row, Col, Statistic, Card, Input, Button, notification } from "antd";
import "../staking.css";
import smartchef from "../../../contracts/smartchef.json";
import { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisCloudFunction,
  useWeb3ExecuteFunction,
} from "react-moralis";
import Reward from "./Reward";
import Account from "components/Account/Account";
import Balance from "./Balance";
import Atps from "./Atps";

function Unstake() {
  const { Moralis } = useMoralis();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    amount ? setTx({ amount }) : setTx();
  }, [amount]);

  const successNotification = ({ message, description }) => {
    notification.success({
      placement: "topRight",
      message,
      description,
      style: {
        color: "rgba(0, 0, 0, 0.65)",
        border: "1px solid #b7eb8f",
        backgroundColor: "#f6ffed",
      },
    });
  };
  const errorNotification = ({ message, description }) => {
    notification.error({
      placement: "topRight",
      message,
      description,
      style: {
        color: "rgba(0, 0, 0, 0.65)",
        border: "1px solid #ffa39e",
        backgroundColor: "#fff1f0",
      },
    });
  };
  const { account, isAuthenticated } = useMoralis();

  const { data } = useMoralisCloudFunction("get_totalstaked", {
    name: account,
  });

  // const decimal = Math.pow(10, 18);

  const { fetch, isFetching } = useWeb3ExecuteFunction({
    abi: smartchef,
    contractAddress: "0x770BEC618E7F90F6A61c8E4c823f581038112a4E",
    functionName: "withdraw",
    params: {
      _amount: amount,
    },
  });
  const fetchAndNotify = async () => {
    await fetch({
      onSuccess: (tx) =>
        tx.wait().then((finalTx) => {
          successNotification({
            description: `Withdrawn Successfully`,
          });
          console.log(finalTx);
        }),
      onError: (error) =>
        errorNotification({
          description: `${error.data.message}`,
        }),
    });
  };
  if (!account || !isAuthenticated) return <Account />;

  return (
    <>
      <Row>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Card className="info">
            <Balance />
          </Card>
        </Col>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Card className="info">
            <Statistic
              title="Total YFIH2 Staked"
              value={data && Moralis.Units.FromWei(data[0], 18)}
              suffix="YFIH2"
            />
          </Card>
        </Col>
        <Col lg={6} md={9} sm={24} xs={24}>
          <Card className="info">
            <Atps />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Reward />
        </Col>
        <Col lg={15} md={15} sm={24} xs={24}>
          <Card className="deposit">
            <p>AMOUNT TO WITHDRAW</p>
            <Input
              onChange={(e) => {
                setAmount(`${e.target.value}`);
              }}
            />
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={() => fetchAndNotify()}
              loading={isFetching}
              disabled={!tx}
            >
              WITHDRAW
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Unstake;
