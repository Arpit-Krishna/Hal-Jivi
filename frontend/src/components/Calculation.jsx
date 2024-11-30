import React, { useState } from 'react';

function Calculation() {
  const [weights, setWeights] = useState({
    W1: 0,
    W2: 0,
    W3: 0,
    W4: 0,
    W5: 0,
  });

  const [data, setData] = useState({
    C2: 0,
    RPI: 0,
    WDI: 0,
    MDI: 0,
    RRI: 0,
    inflation: 0,
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  };

  const handleWeightChange = (e) => {
    const { name, value } = e.target;
    setWeights((prevWeights) => ({
      ...prevWeights,
      [name]: parseFloat(value),
    }));
  };

  const calculateMSP = () => {
    const { W1, W2, W3, W4, W5 } = weights;
    const { C2, RPI, WDI, MDI, RRI, inflation } = data;

    const baseMSP = (W1 * C2) + (W2 * RPI) + (W3 * WDI) + (W4 * MDI) + (W5 * RRI);
    const finalMSP = baseMSP + inflation;
    setResult(finalMSP.toFixed(2));
  };

  const styles = {
    container: {
      backgroundColor: '#121212',
      background: 'linear-gradient(135deg, #111, #444)',
      color: '#e0e0e0',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      fontWeight: 'bold',
      color: '#00adb5',
    },
    label: {
      display: 'block',
      fontSize: '1rem',
      color: '#00adb5',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '5px',
      backgroundColor: '#333',
      color: '#fff',
      border: '2px solid #555',
      fontSize: '1rem',
    },
    button: {
      backgroundColor: '#00adb5',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '10px',
    },
    resultBox: {
      backgroundColor: '#1e1e1e',
      color: '#00adb5',
      padding: '15px',
      marginTop: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Calculate MSP</h3>

      <label style={styles.label}>Weight for C2 (W1):</label>
      <input
        type="number"
        name="W1"
        value={weights.W1}
        onChange={handleWeightChange}
        style={styles.input}
        placeholder="Enter W1 value"
      />

      <label style={styles.label}>Weight for RPI (W2):</label>
      <input
        type="number"
        name="W2"
        value={weights.W2}
        onChange={handleWeightChange}
        style={styles.input}
        placeholder="Enter W2 value"
      />

      <label style={styles.label}>Weight for WDI (W3):</label>
      <input
        type="number"
        name="W3"
        value={weights.W3}
        onChange={handleWeightChange}
        style={styles.input}
        placeholder="Enter W3 value"
      />

      <label style={styles.label}>Weight for MDI (W4):</label>
      <input
        type="number"
        name="W4"
        value={weights.W4}
        onChange={handleWeightChange}
        style={styles.input}
        placeholder="Enter W4 value"
      />

      <label style={styles.label}>Weight for RRI (W5):</label>
      <input
        type="number"
        name="W5"
        value={weights.W5}
        onChange={handleWeightChange}
        style={styles.input}
        placeholder="Enter W5 value"
      />

      <label style={styles.label}>Comprehensive Cost of Production (C2):</label>
      <input
        type="number"
        name="C2"
        value={data.C2}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter C2 value"
      />

      <label style={styles.label}>Real-time Price Index (RPI):</label>
      <input
        type="number"
        name="RPI"
        value={data.RPI}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter RPI value"
      />

      <label style={styles.label}>Weather Data Index (WDI):</label>
      <input
        type="number"
        name="WDI"
        value={data.WDI}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter WDI value"
      />

      <label style={styles.label}>Market Demand Index (MDI):</label>
      <input
        type="number"
        name="MDI"
        value={data.MDI}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter MDI value"
      />

      <label style={styles.label}>Regional Risk Index (RRI):</label>
      <input
        type="number"
        name="RRI"
        value={data.RRI}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter RRI value"
      />

      <label style={styles.label}>Inflation (additional cost):</label>
      <input
        type="number"
        name="inflation"
        value={data.inflation}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Enter inflation value"
      />

      <button style={styles.button} onClick={calculateMSP}>
        Calculate MSP
      </button>

      {result && (
        <div style={styles.resultBox}>
          <strong>Calculated MSP: ₹{result} per quintal</strong>
        </div>
      )}
    </div>
  );
}

export default Calculation;
