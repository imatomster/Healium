// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Billing is Ownable {
    
    struct Bill {
        address patient;
        uint256 amount;
        bool paid;
    }
    
    mapping (address => Bill[]) public bills;
    
    event BillCreated(address indexed physician, address indexed patient, uint256 amount);
    event BillPaid(address indexed patient, uint256 amount);
    
    function createBill(address _patient, uint256 _amount) public {
        bills[msg.sender].push(Bill(_patient, _amount, false));
        emit BillCreated(msg.sender, _patient, _amount);
    }
    
    function getBillCount(address _physician) public view returns (uint256) {
        return bills[_physician].length;
    }
    
    function getBill(address _physician, uint256 _index) public view returns (address, uint256, bool) {
        Bill storage bill = bills[_physician][_index];
        return (bill.patient, bill.amount, bill.paid);
    }
    
    function payBill(address _physician, uint256 _index) public payable {
        Bill storage bill = bills[_physician][_index];
        require(msg.sender == bill.patient, "Only the patient can pay this bill");
        require(msg.value == bill.amount, "Incorrect amount sent");
        require(!bill.paid, "Bill already paid");
        bill.paid = true;
        payable(_physician).transfer(msg.value);
        emit BillPaid(bill.patient, msg.value);
    }
}
