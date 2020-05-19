pragma solidity >=0.4.21 <0.6.0;

contract Migrations 
{
 address public owner;
 uint public last_completed_migration;
//public constructor
 constructor() public 
 {
    owner = msg.sender;
  }
  modifier restricted() 
  {
    if (msg.sender == owner) _;
  }
//completion function
  function setCompleted(uint completed) public restricted 
  {
    last_completed_migration = completed;
  }
  //Address upgrade function
  function upgrade(address new_address) public restricted 
  {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
