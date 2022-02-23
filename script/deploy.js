const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const TokenVesting = await ethers.getContractFactory("TokenVesting");
  // const vesting = await TokenVesting.deploy("token address here");
  const vesting = await TokenVesting.deploy(
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  );
  await vesting.deployed();

  console.log("vesting contract deployed at ", vesting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
