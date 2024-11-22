import React, { useState } from 'react';

function Form({ onCitySubmit }) {
  const [formData, setFormData] = useState({
    labour: '',
    land: '',
    crop: '',
    peopleInvolved: '',
    state: '',
    city: '',
    address: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(formData.city);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.heading}>Farm Details</h3>

      <label style={styles.label}>Labour:</label>
      <input
        type="text"
        name="labour"
        value={formData.labour}
        onChange={handleInputChange}
        placeholder="Labour required"
        style={styles.input}
      />

      <label style={styles.label}>Land:</label>
      <input
        type="text"
        name="land"
        value={formData.land}
        onChange={handleInputChange}
        placeholder="Land details"
        style={styles.input}
      />

      <label style={styles.label}>Crop:</label>
      <input
        type="text"
        name="crop"
        value={formData.crop}
        onChange={handleInputChange}
        placeholder="Crop name"
        style={styles.input}
      />

      <label style={styles.label}>No. of People Involved:</label>
      <input
        type="number"
        name="peopleInvolved"
        value={formData.peopleInvolved}
        onChange={handleInputChange}
        placeholder="Number of people involved"
        style={styles.input}
      />

      
      <div style={styles.partitionLine}></div>

      <h4 style={styles.subheading}>Location</h4>
      <label style={styles.label}>State:</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        placeholder="State"
        style={styles.input}
      />

      <label style={styles.label}>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        placeholder="City"
        style={styles.input}
      />

      <label style={styles.label}>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        style={styles.input}
      />

      <div style={styles.partitionLine}></div>

      <h4 style={styles.subheading}>Period of Cultivation</h4>
      <label style={styles.label}>Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleInputChange}
        style={styles.input}
      />

      <label style={styles.label}>End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleInputChange}
        style={styles.input}
      />
      
      <button type="submit" style={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: '#121212',
    color: '#e0e0e0',
    padding: '20px',
    borderRadius: '15px',
    background: 'linear-gradient(135deg, #111, #444)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#00adb5',
  },
  partitionLine: {
    height: '3px',
    backgroundColor: '#444',
    margin: '20px 0',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#00adb5',
  },
  label: {
    fontSize: '1rem',
    color: '#00adb5',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    border: '2px solid #555',
    fontSize: '1rem',
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
  },
};

export default Form;
