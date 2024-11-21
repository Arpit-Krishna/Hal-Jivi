import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import KhataContract from './contract/MyContract.json';

const infuraProjectId = '2Rbipvdcsy8gUILIOTJcvydrimM';
const POLYGON_RPC_URL = `https://polygon-mumbai.infura.io/v3/${infuraProjectId}`;
const web3 = new Web3(window.ethereum || POLYGON_RPC_URL);
const contract = new web3.eth.Contract(KhataContract.abi, KhataContract.address);

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [khataId, setKhataId] = useState(null);
    const [account, setAccount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => setAccount(accounts[0]))
                .catch(() => alert('Please connect your wallet.'));
        } else {
            alert('No Ethereum wallet detected. Please install MetaMask.');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrorMessage(''); // Reset error message on input change
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, age, gender, phoneNumber, email, password, confirmPassword } = formData;

        // Basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        if (!phoneRegex.test(phoneNumber)) {
            setErrorMessage('Please enter a valid 10-digit phone number');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            if (!account) {
                alert('No Ethereum account detected. Please connect your wallet.');
                return;
            }

            const gasLimit = await contract.methods.insertKisan(name, parseInt(age), gender, parseInt(phoneNumber), email)
                .estimateGas({ from: account });
            await contract.methods.insertKisan(name, parseInt(age), gender, parseInt(phoneNumber), email)
                .send({ from: account, gas: gasLimit });

            const khataId = await contract.methods.getKhataId().call();
            setKhataId(khataId - 1);
            alert(`Signup successful! Your Khata ID is: ${khataId - 1}. Please remember it for future reference.`);
        } catch (error) {
            setErrorMessage(`Error: ${error.message}`);
        }
    };

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '30px',
            backgroundColor: '#121212',
            borderRadius: '12px',
            color: '#EAEAEA',
            background: 'linear-gradient(135deg, #111, #444)',
        },
        header: {
            textAlign: 'center',
            fontSize: '2rem',
            font: 'bold',
            color: '#00adb5',
            marginBottom: '25px',
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
        },
        label: {
            fontSize: '1.1rem',
            color: '#00adb5',
            marginBottom: '5px',
        },
        input: {
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #444',
            backgroundColor: '#333',
            color: '#EAEAEA',
        },
        select: {
            padding: '12px',
            borderRadius: '6px',
            border: '1px solid #444',
            backgroundColor: '#333',
            color: '#EAEAEA',
            appearance: 'none',
        },
        button: {
            width: '100%',
            padding: '9px',
            borderRadius: '11px',
            border: 'none',
            backgroundColor: '#00adb5',
            color: '#FFF',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '20px',
        },
        khataIdContainer: {
            marginTop: '20px',
            textAlign: 'center',
            color: '#00adb5',
        },
        error: {
            color: '#ff4d4d',
            textAlign: 'center',
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Signup for Khata</h2>
            <form onSubmit={handleSignup}>
                {Object.keys(formData).map((field) => (
                    <div style={styles.formGroup} key={field}>
                        <label style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                            style={styles.input}
                            type={field === 'age' ? 'number' : field.includes('password') ? 'password' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button style={styles.button} type="submit">Signup</button>
                {errorMessage && <div style={styles.error}>{errorMessage}</div>}
            </form>

            {khataId && (
                <div style={styles.khataIdContainer}>
                    <h3>Your Khata ID: {khataId}</h3>
                    <p>Please remember your Khata ID for future logins.</p>
                </div>
            )}
        </div>
    );
}
