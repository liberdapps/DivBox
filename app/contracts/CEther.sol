// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;

interface CEther {
    function totalSupply() view external returns (uint256);

    function balanceOf(address account) view external returns (uint256);

    function exchangeRateStored() view external returns (uint256);

    function mint() external payable;

    function redeem(uint256) external returns (uint256);
}
 
