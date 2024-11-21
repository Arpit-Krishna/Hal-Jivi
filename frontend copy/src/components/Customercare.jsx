// import React, { useState } from 'react';

// const Customercare = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('https://formspree.io/f/mnnqpkww', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//       });
//       setError(null);
//     } else {
//       setSubmitted(false);
//       setError('There was an error submitting your form. Please try again.');
//     }
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       backgroundColor: '#121212',
//       color: '#121212',
//       minHeight: '100vh',
//       justifyContent: 'center',
//     },
//     title: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       color: '#00adb5',
//       textAlign: 'center',
//       textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
//     },
//     form: {
//       width: '100%',
//       maxWidth: '500px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '20px',
//       backgroundColor: '#121212',
//       borderRadius: '12px',
//       padding: '30px',
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     label: {
//       fontSize: '1.1rem',
//       marginBottom: '8px',
//       color: '#00adb5',
//     },
//     input: {
//       padding: '12px',
//       borderRadius: '8px',
//       border: '1px solid #333',
//       backgroundColor: '#333',
//       color: '#ffffff',
//       outline: 'none',
//       transition: 'border 0.3s',
//     },
//     textarea: {
//       padding: '12px',
//       borderRadius: '8px',
//       border: '1px solid #333',
//       backgroundColor: '#333',
//       color: '#ffffff',
//       outline: 'none',
//       minHeight: '120px',
//       resize: 'vertical',
//       transition: 'border 0.3s',
//     },
//     button: {
//       padding: '5px',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       borderRadius: '8px',
//       border: 'none',
//       width: '100%',
//       backgroundColor: '#00adb5',
//       color: '#ffffff',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s, transform 0.3s',
//     },
//     buttonHover: {
//       backgroundColor: '#007b7f',
//       transform: 'scale(1.05)',
//     },
//     message: {
//       color: submitted ? 'green' : 'red',
//       margin: '20px 0',
//       textAlign: 'center',
//       fontWeight: 'bold',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <p style={styles.title}>Contact Us</p>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label htmlFor="name" style={styles.label}>Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             style={styles.input}
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             style={styles.input}
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="message" style={styles.label}>Message</label>
//           <textarea
//             id="message"
//             name="message"
//             style={styles.textarea}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button 
//           type="submit" 
//           style={styles.button}
//           onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
//           onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
//         >
//           Submit
//         </button>
//       </form>
//       {submitted && <p style={styles.message}>Thank you for your message!</p>}
//       {error && <p style={styles.message}>{error}</p>}
//     </div>
//   );
// };

// export default Customercare;


import React, { useState } from 'react';

const Customercare = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/mnnqpkww', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setError(null);
    } else {
      setSubmitted(false);
      setError('There was an error submitting your form. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#121212',
      color: '#e0e0e0',
      minHeight: '100vh',
      justifyContent: 'center',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#00adb5',
      textAlign: 'center',
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
    },
    form: {
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      borderRadius: '12px',
      padding: '30px',
      backgroundColor: '#121212',
      background: 'linear-gradient(135deg, #111, #444)',
      color: '#e0e0e0',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '1.1rem',
      marginBottom: '8px',
      color: '#00adb5',
    },
    input: {
      width: '100%',
      padding: '7px',
      marginBottom: '15px',
      borderRadius: '5px',
      backgroundColor: '#333',
      color: '#fff',
      border: '2px solid #555',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border 0.3s',
    },
    textarea: {
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #333',
      backgroundColor: '#333',
      color: '#ffffff',
      outline: 'none',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'border 0.3s',
    },
    button: {
      padding: '12px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#00adb5',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#007b7f',
      transform: 'scale(1.05)',
    },
    message: {
      color: submitted ? 'green' : 'red',
      margin: '20px 0',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Contact Us</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here..."
            style={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {submitted && <p style={styles.message}>Thank you for your message!</p>}
      {error && <p style={styles.message}>{error}</p>}
    </div>
  );
};

export default Customercare;
