import React, { useState } from 'react';
import Form from './Form';
import Weather from './Weather';
import Khata from './Khata';
import Calculation from './Calculation';

function MSP() {
  const [city, setCity] = useState('');

  const handleCitySubmit = (cityName) => {
    setCity(cityName);
  };

  const styles = {
    container: {
      backgroundColor: '#121212',
      color: '#e0e0e0',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '36px',
      margin: '20px 0',
      color: '#00adb5',
      fontWeight: 'bold',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      width: '100%',
      marginTop: '40px',
    },
    weatherCalculationContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '35%',
      minWidth: '280px',
    },
    sectionTitle: {
      fontSize: '24px',
      color: '#00adb5',
      marginBottom: '15px',
      textAlign: 'center',
    },
    khataButton: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#00adb5',
      color: '#fff',
      fontSize: '30px',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.4)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    khataButtonHover: {
      backgroundColor: '#009a9c',
      transform: 'scale(1.1)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Minimum Support Price (MSP) Dashboard</h1>

      <div style={styles.content}>
        <div style={{ width: '48%', minWidth: '280px' }}>
          {/* <h2 style={styles.sectionTitle}>Form Input</h2> */}
          <Form onCitySubmit={handleCitySubmit} />
        </div>

        <div style={styles.weatherCalculationContainer}>
          <div style={{ width: '100%' }}>
            {/* <h2 style={styles.sectionTitle}>Weather Details</h2> */}
            <Weather city={city} />
          </div>

          <div style={{ width: '100%' }}>
            {/* <h2 style={styles.sectionTitle}>MSP Calculation</h2> */}
            <Calculation />
          </div>
        </div>
      </div>

      <div>
        <Khata/>
      </div>
    </div>
  );
}

export default MSP;
