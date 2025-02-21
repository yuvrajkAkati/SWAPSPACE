// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.7.0 < 0.9.0;

interface IWETH {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address owner) external view returns (uint256);
    function transferFrom(address sender , address recipient , uint amount) external returns (bool) ;
    event Transfer( address indexed from , address indexed to , uint value);
    event Apprvoe( address indexed owner , address indexed spender , uint value);
} 

