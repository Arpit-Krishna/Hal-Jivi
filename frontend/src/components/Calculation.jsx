import React, { useState } from 'react';

function Calculation() {
  const [weights, setWeights] = useState({
    W1: 0.4,
    W2: 0.2,
    W3: 0.1,
    W4: 0.2,
    W5: 0.1,
  });

  const [data, setData] = useState({
    C2: 0,
    RPI: 0,
    WDI: 0,
    MDI: 0,
    RRI: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: parseFloat(value),
    }));
  };

  const calculateMSP = () => {
    const { W1, W2, W3, W4, W5 } = weights;
    const { C2, RPI, WDI, MDI, RRI } = data;
    const MSP = (W1 * C2) + (W2 * RPI) + (W3 * WDI * C2) + (W4 * MDI * C2) + (W5 * RRI * C2);
    return MSP.toFixed(2);
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
    result: {
      color: '#fff',
      marginTop: '20px',
      backgroundColor: '#00adb5',
      padding: '10px 20px',
      borderRadius: '15px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Calculate MSP</h3>

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

      <div style={styles.result}>
        <strong>Calculated MSP:</strong> ₹{calculateMSP()} per quintal
      </div>
    </div>
  );
}

export default Calculation;
