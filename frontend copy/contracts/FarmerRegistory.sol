// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FarmerRegistry {
    address owner;

    struct Farmer {
        uint id;
        uint landArea;
        bool registered;
    }

    mapping(address => Farmer) farmers;
    uint public farmerCount;

    constructor() {
        owner = msg.sender;
    }

    function registerFarmer(uint _landArea) public {
        require(!farmers[msg.sender].registered, "Farmer already registered");
        
        farmers[msg.sender] = Farmer(farmerCount, _landArea, true);
        farmerCount++;
    }

    function getFarmerDetails(address _farmer) public view returns (uint, uint, bool) {
        Farmer memory farmer = farmers[_farmer];
        return (farmer.id, farmer.landArea, farmer.registered);
    }
}