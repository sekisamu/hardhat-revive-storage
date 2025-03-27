//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Storage.sol";

contract CallStorage {

    bytes public storageCode;
    address public storageAddress;

    event StorageDeployed(address indexed storageAddress);

    function newStorage(uint initValue, uint changedValue) public {
        Storage s = new Storage(initValue);
        s.setNumber(changedValue);
        storageAddress = address(s);
        emit StorageDeployed(storageAddress);
    }

    function setStorageCode() public {
        storageCode = type(Storage).creationCode;
    }
}