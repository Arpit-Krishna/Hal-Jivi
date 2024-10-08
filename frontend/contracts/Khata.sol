// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Khata {
    uint public khata_id = 1000;

    struct Kisan_Details
    {
        uint khata_id;
        string kisanName;
        string mail;
        uint age;
        string gender;
        uint phNo;
        // string location;
        
    }

    struct Invoice {
        uint khata_id;
        string itemName;
        uint256 itemQuantity;
        uint256 unitPrice;
        string invoiceHash;
    }

    Invoice[] public invoices;
    mapping(uint256 => Kisan_Details) public Kisan;

    function getKhataId()public view returns(uint){
        return khata_id;
    }

    function insertKisan(string memory _kisanName,uint _age,string memory _gender,uint _phNo,string memory _mail)public 
    {
        Kisan[khata_id]=Kisan_Details(khata_id, _kisanName, _mail, _age, _gender, _phNo);
        khata_id++;
    }

    event InvoiceAdded(uint256 invoiceId, string itemName, uint256 itemQuantity, uint256 unitPrice, string invoiceHash);

    function addInvoice(uint _khata_id, string memory _itemName, uint256 _itemQuantity, uint256 _unitPrice, string memory _invoiceHash) public {
        Invoice memory newrecord;
        newrecord.khata_id=_khata_id;
        newrecord.itemName=_itemName;
        newrecord.itemQuantity=_itemQuantity;
        newrecord.unitPrice=_unitPrice;
        newrecord.invoiceHash=_invoiceHash;

        invoices.push(newrecord);
        
        // invoices.push(Invoice(_khata_id, _itemName, _itemQuantity, _unitPrice, _invoiceHash));
        // emit InvoiceAdded(_itemName, _itemQuantity, _unitPrice, _invoiceHash);
    }

    // function getInvoice(uint256 _khata_id) public view returns (string memory, uint256, uint256, string memory) {
    //     require(_invoiceId < invoices.length, "Invoice does not exist");
    //     Invoice memory invoice = invoices[_invoiceId];
    //     return (invoice.itemName, invoice.itemQuantity, invoice.unitPrice, invoice.invoiceHash);
    // }
}
