const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

const snapshots = require("./snapshots.json");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("deployer: ", deployer.address);

  const vesting = await ethers.getContractAt(
    "TokenVesting",
    "0x01c1DeF3b91672704716159C9041Aeca392DdFfb" // vesting contract address here
  );

  let newVesting = {
    users: [],
    totalAmounts: [],
  };

  let NO = 0;
  for (let i = 0; i < snapshots.length; i++) {
    const snapshot = snapshots[i];
    if (snapshot.type != "contract") {
      const amount = ethers.utils.parseUnits(snapshot.balance).div(10);
      if (!amount.isZero()) {
        newVesting.users.push(snapshot.wallet);
        newVesting.totalAmounts.push(amount);
      }
    }

    if (newVesting.users.length == 1 || i == snapshots.length - 1) {
      await (
        await vesting.setVesting(newVesting.users, newVesting.totalAmounts)
      ).wait();
      for (let j = 0; j < newVesting.users.length; j++) {
        console.log(
          ++NO,
          ". ",
          newVesting.users[j],
          " -> ",
          newVesting.totalAmounts[j].toString()
        );
      }

      newVesting = {
        users: [],
        totalAmounts: [],
      };
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
