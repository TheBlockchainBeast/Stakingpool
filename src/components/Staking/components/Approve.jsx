import { Input, Button, notification } from "antd";
import "../staking.css";
import brisepad from "../../../contracts/brisepad.json";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Account from "components/Account/Account";

function Approve() {
  const { Moralis } = useMoralis();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    amount ? setTx({ amount }) : setTx();
  }, [amount]);

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "topRight",
      message,
      description,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const { account, isAuthenticated } = useMoralis();

  async function approve() {
    const { amount } = tx;

    let options = {
      contractAddress: "0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D",
      functionName: "approve",
      abi: brisepad,
      params: { "": [account, amount] },
      gasLimit: 500000,
      gasFee: 200000,
    };

    setIsPending(true);
    const txStatus = await Moralis.executeFunction(options);
    const result = await txStatus.wait();

    if (result) {
      console.log(result);
      console.log(result.blockHash);
      openNotification({
        message: "🔊 Stake Successful",
        description: `${result.transactionHash}`,
      });
      setIsPending(false);
    }
  }
  if (!account || !isAuthenticated) return <Account />;

  return (
    <>
      <Input
        onChange={(e) => {
          setAmount(`${e.target.value}`);
        }}
      />
      <Button
        type="primary"
        shape="round"
        size="large"
        loading={isPending}
        onClick={() => approve()}
        disabled={!tx}
      >
        APPROVE
      </Button>
    </>
  );
}

export default Approve;
