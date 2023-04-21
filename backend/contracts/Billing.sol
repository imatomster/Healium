// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Billing is Ownable {
    
    struct Bill {
        address physician;
        address patient;
        uint256 cptcode;
        uint256 pricex100;
        bool paid;
    }
    
    mapping (address => Bill[]) public bills;
    
    event BillCreated(address indexed physician, address indexed patient, uint256 cptcode, uint256 pricex100);
    event BillPaid(address indexed patient, uint256 cptcode, uint256 pricex100, bool paid);
    
    function createBill(address patient, uint256 cptcode, uint256 pricex100) public {
        bills[patient].push(Bill(msg.sender, patient, cptcode, pricex100, false));
        emit BillCreated(msg.sender, patient, cptcode, pricex100);
    }
    
    function getBillCount(address patient) public view returns (uint256) {
        return bills[patient].length;
    }
    
    // only have to be able to return one index, can utilize frontend to make the smart contract calls
    // cheaper to call smart contract offchain and compute than to call once on chain and compute on chain with for loops
    function getBillAtIndex(address patient, uint256 index) public view returns (address, address, uint256, uint256, bool) {
        Bill storage bill = bills[patient][index];
        return (bill.physician, bill.patient, bill.cptcode, bill.pricex100, bill.paid);
    }
    
    function payBill(address patient, uint256 index) public payable {
        Bill storage bill = bills[patient][index];
        require(msg.sender == bill.patient, "Only the patient can pay this bill");
        require(msg.value == bill.pricex100, "Incorrect amount sent");
        require(!bill.paid, "Bill already paid");

        bill.paid = true;

        payable(bill.physician).transfer(msg.value);
        emit BillPaid(bill.patient, bill.cptcode, msg.value, bill.paid);
    }
}
