Moralis.Cloud.define("get_balance", async (request) => {
  const abi = [
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "balanceOf",
      inputs: [{ type: "address", name: "account", internalType: "address" }],
    },
  ];

  web3 = new Moralis.Web3(
    new Moralis.Web3.providers.HttpProvider(
      "https://bsc-dataseed2.binance.org",
    ),
  );
  address = "0xDcb624C870d73CDD0B3345762977CB14dE598cd0";
  const contract = new web3.eth.Contract(abi, address);
  const balance = await contract.methods
    .balanceOf(request.params.account)
    .call()
    .catch((err) => {
      const logger1 = Moralis.Cloud.getLogger();
      logger1.info(JSON.stringify(err));
    });
  return balance;
});
