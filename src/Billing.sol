// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Billing {
    //map of cpt code to price
    mapping(uint256 => uint256) private map;
    uint256 public mapLength;

    address userAddress;

    event opUploaded(address User, uint256 cptcode, uint256 pricex100);

    // Operation
    // struct Operation {
    //     address payable user;
    //     uint256 cptcode;
    //     uint256 pricex100;
    //     bool paid;
    // }

    // event OperationCreated (
    //     address user,
    //     uint256 cptcode,
    //     uint256 pricex100,
    //     bool paid
    // );
    
    constructor(address _userAddress) payable{
        userAddress = _userAddress;
    }

    // function createOperation(address user, uint256 cptcode, uint256 pricex100) private pure private{
    //    // created operation
    //     Operation(payable(user), cptcode, pricex100, false);
        
    //     // logs that operation was successfully made
    //     emit OperationCreated(user, cptcode, pricex100, false);
    // }

    // physician uploads operations
    function uploadOp(uint256 cptcode, uint256 pricex100) external payable{
        map[cptcode] = pricex100;
        mapLength = mapLength + 1;
        emit opUploaded(userAddress, cptcode, pricex100);
    }

    //returns total price of all operations a patient received
    function sumMapValues() public view returns (uint) {
        uint sum = 0;
        for (uint i = 0; i < mapLength; i++) {
            sum += map[i];
        }
        return sum;
    }
}

