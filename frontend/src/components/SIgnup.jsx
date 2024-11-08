import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import KhataContract from './contract/MyContract.json';

const infuraProjectId = '2Rbipvdcsy8gUILIOTJcvydrimM';
const POLYGON_RPC_URL = `https://polygon-amoy.infura.io/v3/${infuraProjectId}`;
const web3 = new Web3(window.ethereum || POLYGON_RPC_URL);
const contract = new web3.eth.Contract(KhataContract.abi, KhataContract.address);

export default function Signup() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [khataId, setKhataId] = useState(null);
    const [account, setAccount] = useState('');

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    setAccount(accounts[0]);
                })
                .catch(error => {
                    console.error('Error connecting to wallet:', error);
                    alert('Please connect your wallet.');
                });
        } else {
            alert('No Ethereum wallet detected. Please install MetaMask.');
        }
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            if (!account) {
                alert('No Ethereum account detected. Please connect your wallet.');
                return;
            }
            const gasLimit = await contract.methods.insertKisan(name, parseInt(age), gender, parseInt(phoneNumber), email)
            .estimateGas({ from: account });
            
            console.log(gasLimit, account);

            const result = await contract.methods.insertKisan(name, parseInt(age), gender, parseInt(phoneNumber), email)
                .send({ from: account, gas: gasLimit});
            console.log(result);

            const khataId = await contract.methods.getKhataId().call();
            setKhataId(khataId - 1); // Subtract 1 since Khata ID is incremented after assignment

            alert(`Signup successful! Your Khata ID is: ${khataId - 1}. Please remember it for future reference.`);
        } catch (error) {
            console.error('Error registering Kisan:', error);
            console.log('Error object:', JSON.stringify(error, null, 2)); 
        
            if (error.code === 'INVALID_ARGUMENT') {
                alert('There is an issue with the contract or the parameters you provided.');
            } else {
                alert('Error during signup: ' + error.message);
            }
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Signup</button>
            </form>

            {khataId && (
                <div>
                    <h3>Your Khata ID: {khataId}</h3>
                    <p>Please remember your Khata ID for future logins.</p>
                </div>
            )}
        </div>
    );
}
