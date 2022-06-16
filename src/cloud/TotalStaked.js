Moralis.Cloud.define("get_totalstaked", async (request) => {
  const abi = [
    {
      type: "function",
      stateMutability: "view",
      outputs: [
        { type: "uint256", name: "amount", internalType: "uint256" },
        { type: "uint256", name: "rewardDebt", internalType: "uint256" },
      ],
      name: "userInfo",
      inputs: [{ type: "address", name: "", internalType: "address" }],
    },
  ];

  web3 = new Moralis.Web3(
    new Moralis.Web3.providers.HttpProvider(
      "https://bsc-dataseed2.binance.org",
    ),
  );
  address = "0x770BEC618E7F90F6A61c8E4c823f581038112a4E";
  const contract = new web3.eth.Contract(abi, address);
  const staked = await contract.methods
    .userInfo(request.params.name)
    .call()
    .catch((err) => {
      const logger1 = Moralis.Cloud.getLogger();
      logger1.info(JSON.stringify(err));
    });
  return staked;
});
