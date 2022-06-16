import { Statistic } from "antd";
import "../staking.css";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";

function Atps() {
  const { Moralis } = useMoralis();

  const { data } = useMoralisCloudFunction("get_accTokenPerShare");

  return (
    <Statistic
      title="ATPS"
      value={data && Math.floor(Moralis.Units.FromWei(data, 4))}
      // suffix="YFIO2"
    />
  );
}

export default Atps;
