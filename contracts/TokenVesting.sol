// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract TokenVesting is Ownable {
    using SafeERC20 for IERC20;

    event Claim(address indexed user, uint256 claimedAmount);

    struct VestingData {
        uint256 totalAmount;
        uint256 claimedAmount;
    }

    uint256 public constant FIRST_LOCK_PERCENT = 10; // 10%
    uint256 public constant PERIOD = 30 days * 6; // 6 months
    address public immutable token;
    uint256 public startTime;
    bool public isEnded;
    mapping(address => VestingData) public vestings;

    uint256 public totalRemainAmount;
    uint256 public totalClaimedAmount;

    constructor(address _token) Ownable() {
        token = _token;
    }

    function setVesting(address[] memory users, uint256[] memory totalAmounts)
        external
        onlyOwner
    {
        require(startTime == 0, "vesting already started");
        require(users.length == totalAmounts.length, "invalid parameter");

        for (uint256 i = 0; i < users.length; i++) {
            totalRemainAmount -= vestings[users[i]].totalAmount;

            vestings[users[i]] = VestingData(totalAmounts[i], 0);

            totalRemainAmount += totalAmounts[i];
        }
    }

    function start() external onlyOwner {
        require(startTime == 0, "vesting already started");

        startTime = block.timestamp;
    }

    function end() external onlyOwner {
        require(startTime != 0, "vesting not started");
        isEnded = true;
    }

    function claimable(address user) public view returns (uint256) {
        if (startTime == 0) {
            return 0;
        }

        VestingData memory vesting = vestings[user];
        uint256 firstLock = (vesting.totalAmount * FIRST_LOCK_PERCENT) / 100;
        uint256 duration = block.timestamp - startTime;
        uint256 vestingClimable = ((vesting.totalAmount - firstLock) *
            (duration > PERIOD ? PERIOD : duration)) / PERIOD;

        return firstLock + vestingClimable - vesting.claimedAmount;
    }

    function claim() external {
        require(!isEnded, "claim ended");
        uint256 claimableAmount = claimable(msg.sender);

        require(claimableAmount > 0, "no claimable amount");

        totalRemainAmount -= claimableAmount;
        vestings[msg.sender].claimedAmount += claimableAmount;
        totalClaimedAmount += claimableAmount;

        IERC20(token).safeTransfer(msg.sender, claimableAmount);

        emit Claim(msg.sender, claimableAmount);
    }
}
