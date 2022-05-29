Moralis.Cloud.define("get_totalstaked", async (request) => {
  const abi = [
    { type: "constructor", stateMutability: "nonpayable", inputs: [] },
    {
      type: "event",
      name: "AdminTokenRecovery",
      inputs: [
        {
          type: "address",
          name: "tokenRecovered",
          internalType: "address",
          indexed: false,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Deposit",
      inputs: [
        {
          type: "address",
          name: "user",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "EmergencyWithdraw",
      inputs: [
        {
          type: "address",
          name: "user",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NewPoolLimit",
      inputs: [
        {
          type: "uint256",
          name: "poolLimitPerUser",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NewRewardPerBlock",
      inputs: [
        {
          type: "uint256",
          name: "rewardPerBlock",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "NewStartAndEndBlocks",
      inputs: [
        {
          type: "uint256",
          name: "startBlock",
          internalType: "uint256",
          indexed: false,
        },
        {
          type: "uint256",
          name: "endBlock",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          type: "address",
          name: "previousOwner",
          internalType: "address",
          indexed: true,
        },
        {
          type: "address",
          name: "newOwner",
          internalType: "address",
          indexed: true,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RewardsStop",
      inputs: [
        {
          type: "uint256",
          name: "blockNumber",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Withdraw",
      inputs: [
        {
          type: "address",
          name: "user",
          internalType: "address",
          indexed: true,
        },
        {
          type: "uint256",
          name: "amount",
          internalType: "uint256",
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "PRECISION_FACTOR",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "SMART_CHEF_FACTORY",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "accTokenPerShare",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "bonusEndBlock",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "deposit",
      inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "emergencyRewardWithdraw",
      inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "emergencyWithdraw",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "hasUserLimit",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "initialize",
      inputs: [
        {
          type: "address",
          name: "_stakedToken",
          internalType: "contract IBEP20",
        },
        {
          type: "address",
          name: "_rewardToken",
          internalType: "contract IBEP20",
        },
        {
          type: "uint256",
          name: "_rewardPerBlock",
          internalType: "uint256",
        },
        { type: "uint256", name: "_startBlock", internalType: "uint256" },
        {
          type: "uint256",
          name: "_bonusEndBlock",
          internalType: "uint256",
        },
        {
          type: "uint256",
          name: "_poolLimitPerUser",
          internalType: "uint256",
        },
        { type: "address", name: "_admin", internalType: "address" },
      ],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "isInitialized",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "lastRewardBlock",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "owner",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "pendingReward",
      inputs: [{ type: "address", name: "_user", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "poolLimitPerUser",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "recoverWrongTokens",
      inputs: [
        { type: "address", name: "_tokenAddress", internalType: "address" },
        { type: "uint256", name: "_tokenAmount", internalType: "uint256" },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "renounceOwnership",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "rewardPerBlock",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "contract IBEP20" }],
      name: "rewardToken",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "contract IBEP20" }],
      name: "stakedToken",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "startBlock",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "stopReward",
      inputs: [],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "transferOwnership",
      inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "updatePoolLimitPerUser",
      inputs: [
        { type: "bool", name: "_hasUserLimit", internalType: "bool" },
        {
          type: "uint256",
          name: "_poolLimitPerUser",
          internalType: "uint256",
        },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "updateRewardPerBlock",
      inputs: [
        {
          type: "uint256",
          name: "_rewardPerBlock",
          internalType: "uint256",
        },
      ],
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "updateStartAndEndBlocks",
      inputs: [
        { type: "uint256", name: "_startBlock", internalType: "uint256" },
        { type: "uint256", name: "_bonusEndBlock", internalType: "uint256" },
      ],
    },
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
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "withdraw",
      inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
    },
  ];

  web3 = new Moralis.Web3(
    new Moralis.Web3.providers.HttpProvider("https://chainrpc.com"),
  );
  address = "0x73776f95Deb907436d8A852C551D0eBb7480E5c3";
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
