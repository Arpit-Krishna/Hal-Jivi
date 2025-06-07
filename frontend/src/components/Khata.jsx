// Khata.jsx
import React, { useState } from 'react';
import Web3 from 'web3';
import KhataContract from './contract/MyContract.json';
import { uploadToIPFS, getFromIPFS } from './ipfs';

const infuraProjectId = '2Rbipvdcsy8gUILIOTJcvydrimM';
const POLYGON_RPC_URL = `https://polygon-amoy.infura.io/v3/${infuraProjectId}`;

const web3 = new Web3(POLYGON_RPC_URL);
const contract = new web3.eth.Contract(KhataContract.abi, KhataContract.address);

export default function Khata() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [invoiceIndex, setInvoiceIndex] = useState(null);
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

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
        const accounts = await web3.eth.getAccounts();
        await contract.methods.addInvoice(itemName, itemQuantity, unitPrice, invoiceHash).send({ from: accounts[0] });
        alert('Invoice added to the blockchain.');
        setItemName('');
        setItemQuantity('');
        setUnitPrice('');
        setSelectedFile(null);
      } catch (error) {
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
        alert('Invoice document content: ' + invoiceDocument);
      } catch (error) {
        alert('Error retrieving invoice: ' + error.message);
      }
    } else {
      alert('Please enter a valid invoice index.');
    }
  };

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80px',
      width: '80px',
      backgroundColor: '#3a3a3a',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    popup: {
      position: 'absolute',
      bottom: '100px',
      right: '40px',
      backgroundColor: '#1f1f1f',
      padding: '10px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #111, #444)',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      color: '#fff',
    },
    input: {
      padding: '5px',
      border: '3px solid #555',
      borderRadius: '5px',
      backgroundColor: '#1f1f1f',
      color: '#fff',
      width: '100%',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#00adb5',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.3s',
      margin: '5px 0',
    },
    getInvoiceButton: {
      padding: '10px 20px',
      backgroundColor: '#00adb5',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.3s',
      margin: '5px 0',
    },
    invoiceDetail: {
      display: 'block',
      margin: '10px 0',
      fontSize: '1rem',
      padding: '10px',
      backgroundColor: '#3a3a3a',
      borderRadius: '8px',
      color: '#fff',
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.button} onClick={togglePopup}>
        <h1 style={{ color: 'white' }}>+</h1>
      </div>
      {isPopupOpen && (
        <div style={styles.popup}>
          <form onSubmit={handleSubmit}>
            <table className='table-auto mx-10 px-10'>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="name" style={{ color: '#00adb5' }}>Item Name:</label>
                  </td>
                  <td>
                    <input
                      style={styles.input}
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
                    <label htmlFor="quantity" style={{ color: '#00adb5' }}>Item Quantity:</label>
                  </td>
                  <td>
                    <input
                      style={styles.input}
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
                    <label htmlFor="price" style={{ color: '#00adb5' }}>Unit Price:</label>
                  </td>
                  <td>
                    <input
                      style={styles.input}
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
                    <label htmlFor="invoice" style={{ color: '#00adb5' }}>Invoice Bill:</label>
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
                      style={styles.submitButton}
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
              style={styles.input}
              type="number"
              value={invoiceIndex}
              onChange={(e) => setInvoiceIndex(e.target.value)}
              placeholder="Enter Invoice Index"
            />
            <button
              style={styles.getInvoiceButton}
              onClick={handleGetInvoice}
            >
              Get Invoice
            </button>
          </div>

          {invoiceDetails && (
            <div className="mt-4">
              <h3 style={{ color: '#fff', marginBottom: '10px' }}>Invoice Details:</h3>
              <div style={styles.invoiceDetail}>
                <label>Item Name:</label>
                <span>{invoiceDetails[0]}</span>
              </div>
              <div style={styles.invoiceDetail}>
                <label>Item Quantity:</label>
                <span>{invoiceDetails[1]}</span>
              </div>
              <div style={styles.invoiceDetail}>
                <label>Unit Price:</label>
                <span>{invoiceDetails[2]}</span>
              </div>
              <div style={styles.invoiceDetail}>
                <label>Invoice Bill:</label>
                <span>{invoiceDetails[3]}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
