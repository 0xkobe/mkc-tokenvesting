const chai = require("chai");
const { solidity } = require("ethereum-waffle");
const { time } = require("@openzeppelin/test-helpers");
const { ethers, upgrades } = require("hardhat");
const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants");
const { expect } = chai;

chai.use(solidity);

const units = (value) => ethers.utils.parseUnits(value.toString());
const days = (value) => value * 24 * 60 * 60;

const timeTravel = async (seconds) => {
  await time.increase(seconds);
};

const checkAlmostSame = (a, b) => {
  expect(
    ethers.BigNumber.from(a).gte(ethers.BigNumber.from(b).mul(999).div(1000))
  ).to.be.true;
  expect(
    ethers.BigNumber.from(a).lte(ethers.BigNumber.from(b).mul(1001).div(1000))
  ).to.be.true;
};

describe("TokenVesting", () => {
  let owner, alice, bob, charlie;
  let token, vesting;

  before(async () => {
    const accounts = await ethers.getSigners();
    owner = accounts[0];
    alice = accounts[1];
    bob = accounts[2];
    charlie = accounts[3];

    const TestToken = await ethers.getContractFactory("TestToken");
    token = await TestToken.deploy(1000000); // 1M tokens
    await token.deployed();

    const TokenVesting = await ethers.getContractFactory("TokenVesting");
    vesting = await TokenVesting.deploy(token.address);
    await vesting.deployed();
  });

  it("setVesting", async () => {
    await expect(
      vesting.connect(alice).setVesting([alice.address], [units(10000)])
    ).to.revertedWith("Ownable: caller is not the owner");

    await vesting.setVesting([alice.address], [units(5000)]);
    await vesting.setVesting(
      [alice.address, bob.address],
      [units(10000), units(20000)]
    );

    await vesting.start();
    await expect(
      vesting.setVesting([alice.address], [units(5000)])
    ).to.revertedWith("vesting already started");
  });

  it("claim", async () => {
    await expect(vesting.connect(charlie).claim()).to.revertedWith(
      "no claimable amount"
    );

    await token.transfer(vesting.address, units(30000));

    expect(await vesting.totalRemainAmount()).to.equal(units(30000));
    expect(await vesting.totalClaimedAmount()).to.equal(0);
    checkAlmostSame(await vesting.claimable(alice.address), units(1000));
    checkAlmostSame(await vesting.claimable(bob.address), units(2000));

    await vesting.connect(alice).claim();
    checkAlmostSame(await token.balanceOf(alice.address), units(1000));

    await timeTravel(days(30));

    checkAlmostSame(await vesting.claimable(alice.address), units(1500));
    checkAlmostSame(await vesting.claimable(bob.address), units(5000));

    await vesting.connect(bob).claim();
    checkAlmostSame(await token.balanceOf(bob.address), units(5000));

    await timeTravel(days(30) * 5);

    checkAlmostSame(await vesting.claimable(alice.address), units(9000));
    checkAlmostSame(await vesting.claimable(bob.address), units(15000));

    await vesting.connect(bob).claim();
    checkAlmostSame(await token.balanceOf(bob.address), units(20000));

    await timeTravel(days(30) * 5);

    checkAlmostSame(await vesting.claimable(alice.address), units(9000));
    checkAlmostSame(await vesting.claimable(bob.address), 0);

    await vesting.connect(alice).claim();
    checkAlmostSame(await token.balanceOf(alice.address), units(10000));
  });
});
