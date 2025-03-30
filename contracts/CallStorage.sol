//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Storage.sol";

contract CallStorage {
    address public storageAddress;

    event StorageDeployed(address indexed storageAddress);

    function newStorage(uint initValue, uint changedValue) public {
        Storage s = new Storage(initValue);
        s.setNumber(changedValue);
        storageAddress = address(s);
        emit StorageDeployed(storageAddress);
    }

    function getStorageCode() public pure returns (bytes memory) {
        return type(Storage).creationCode;
    }
}