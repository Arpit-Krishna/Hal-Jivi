import React, { useState }from 'react'
import './Khata.css'
// import web3 from './web3';

// const myContract = new web3.eth.Contract(MyContract.abi, MyContract.address);

// myContract.methods.myFunction().call().then((result) => {
//   // Do something with the result
// });

export default function Khata() {

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
          <table className='table-auto mx-10 px-10'>
            <tr>
              <td colSpan={2}><h5 className="text-2xl font-bold">Add to Khata</h5></td>
           </tr>
            <tr>
              <td >
                <label htmlFor="name">Item Name:</label>
                </td>
                <td className=''>
                <input className = "p-1 border border-gray-950 rounded-sm bg-transparent" type="text" id="name" name="name" required/>
              </td>
            </tr>
            <tr>
              <td >
                <label htmlFor="quantity">Item Quantity:</label>
                </td>
                <td >
                <input className = "p-1 border border-gray-950 rounded-sm bg-transparent" type="number" id="quantity" name="quantites" required/>
                </td>
            </tr>
            <tr>
              <td >
                <label htmlFor="price">Unit Price:</label>
                </td>
                <td >
                <input className = "bg-transparent p-1 border border-gray-950 rounded-sm " type="number" id="price" name="price" required/> 
                </td>
            </tr>
            <tr>
              <td>
                <lable htmlFor="invoice">Invoice Bill:</lable>
                </td>
                <td className="w-96 flex justify-end px-3">
                <input className="mx-14" type="file" id="invoice" name="invoice" required/>
              </td>
            </tr>
            <tr><td  colSpan={2}><button className="bg-[#e3b080] font-bold py-2 px-2 my-1 mx-1 rounded-full" type="submit">Submit</button></td></tr>
            
          </table>
        </div>
      )}
    </div>
  )
}
