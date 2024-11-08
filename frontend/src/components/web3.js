import MyContract from './contract/MyContract.json';
const Web3 = require('web3');


const contractABI = MyContract.abi;
const contractAddress = MyContract.address;

const infuraProjectId = '2Rbipvdcsy8gUILIOTJcvydrimM';

const polygonMumbainetUrl = `https://polygon-amoy.infura.io/v3/${infuraProjectId}`;

const web3 = new Web3(new Web3.providers.HttpProvider(polygonMumbainetUrl));

console.log("Connected to Polygon network:", web3);
const contract = new web3.eth.Contract(contractABI, contractAddress);

export async function addInvoice(itemName, itemQuantity, unitPrice, invoiceHash) {
  const accounts = await web3.eth.getAccounts();
  const fromAccount = accounts[0];

  await contract.methods.addInvoice(itemName, itemQuantity, unitPrice, invoiceHash).send({ from: fromAccount });
}

export async function getInvoice(index) {
  const invoice = await contract.methods.getInvoice(index).call();
  return invoice;
}