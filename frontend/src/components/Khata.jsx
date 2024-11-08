
import React, { useState } from 'react';
import Web3 from 'web3';
import KhataContract from './contract/MyContract.json'; // Ensure this path is correct for your ABI file
import { uploadToIPFS, getFromIPFS } from './ipfs'; // Implement these functions as needed
import './Khata.css';


const infuraProjectId = '2Rbipvdcsy8gUILIOTJcvydrimM';
// Replace with your Infura/Polygon RPC URL
const POLYGON_RPC_URL = `https://polygon-amoy.infura.io/v3/${infuraProjectId}`; // Update with the actual RPC URL

const web3 = new Web3(POLYGON_RPC_URL);
const contract = new web3.eth.Contract(KhataContract.abi, KhataContract.address);

export default function Khata() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [invoiceIndex, setInvoiceIndex] = useState(null);
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && isValidFileType(file.type)) {
      setSelectedFile(file);
      alert(file.name + ' is selected as Invoice Bill.');
    } else {
      event.target.value = null;
      setSelectedFile(null);
      alert('Only JPG, PNG, and PDF files are allowed.');
    }
  };

  const isValidFileType = (fileType) => {
    return ['image/jpeg', 'image/png', 'application/pdf'].includes(fileType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile && itemName && itemQuantity && unitPrice) {
      try {
        const invoiceHash = await uploadToIPFS(selectedFile);
        console.log('Uploaded to IPFS with hash:', invoiceHash);

        const accounts = await web3.eth.getAccounts();
        await contract.methods.addInvoice(itemName, itemQuantity, unitPrice, invoiceHash).send({ from: accounts[0] });
        console.log('Invoice added to the blockchain.');
        alert('Invoice added to the blockchain.');

        setItemName('');
        setItemQuantity('');
        setUnitPrice('');
        setSelectedFile(null);
      } catch (error) {
        console.error('Error adding invoice:', error);
        alert('Error adding invoice: ' + error.message);
      }
    } else {
      alert('Please fill all fields and select a valid invoice file.');
    }
  };

  const handleGetInvoice = async () => {
    if (invoiceIndex !== null) {
      try {
        const invoice = await contract.methods.getInvoice(invoiceIndex).call();
        setInvoiceDetails(invoice);

        const invoiceDocument = await getFromIPFS(invoice[3]);
        console.log('Invoice document content:', invoiceDocument);
        alert('Invoice document content: ' + invoiceDocument);
      } catch (error) {
        console.error('Error retrieving invoice:', error);
        alert('Error retrieving invoice: ' + error.message);
      }
    } else {
      alert('Please enter a valid invoice index.');
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div className="fixed bottom-0 right-0 m-8">
      <div className={`flex items-center justify-center h-20 w-20 bg-[#415041] rounded-[50%] ${isPopupOpen ? 'rotate-button-clicked' : 'unrotate'}`}>
        <button className="button" onClick={togglePopup} alt="Add to Khata"> <h1>+</h1> </button>
      </div>
      {isPopupOpen && (
        <div className="absolute bottom-28 right-32 bg-[#cfc9b1] p-2 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <table className='table-auto mx-10 px-10'>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="name">Item Name:</label>
                  </td>
                  <td>
                    <input
                      className="p-1 border border-gray-950 rounded-sm bg-transparent"
                      type="text"
                      id="name"
                      name="name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="quantity">Item Quantity:</label>
                  </td>
                  <td>
                    <input
                      className="p-1 border border-gray-950 rounded-sm bg-transparent"
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={itemQuantity}
                      onChange={(e) => setItemQuantity(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="price">Unit Price:</label>
                  </td>
                  <td>
                    <input
                      className="bg-transparent p-1 border border-gray-950 rounded-sm"
                      type="number"
                      id="price"
                      name="price"
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="invoice">Invoice Bill:</label>
                  </td>
                  <td className="w-96 flex justify-center px-3">
                    <input
                      className="file block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50
                        hover:file:bg-violet-100"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={handleFileChange}
                      type="file"
                      id="invoice"
                      name="invoice"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <button
                      className="bg-[#e3b080] font-bold py-2 px-2 my-1 mx-1 rounded-full"
                      type="submit"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="mt-4">
            <input
              type="number"
              value={invoiceIndex}
              onChange={(e) => setInvoiceIndex(e.target.value)}
              placeholder="Enter Invoice Index"
            />
            <button
              className="bg-[#e3b080] font-bold py-2 px-2 my-1 mx-1 rounded-full"
              onClick={handleGetInvoice}
            >
              Get Invoice
            </button>
          </div>
          {invoiceDetails && (
            <div className="mt-4">
              <h3>Invoice Details:</h3>
              <p>Item Name: {invoiceDetails[0]}</p>
              <p>Item Quantity: {invoiceDetails[1]}</p>
              <p>Unit Price: {invoiceDetails[2]}</p>
              <p>Invoice Hash: {invoiceDetails[3]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
