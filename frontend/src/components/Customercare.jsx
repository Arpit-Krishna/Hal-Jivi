// import React from 'react';
// import { useState } from 'react';
// import './Customercare.css'; 

// const Customercare = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add your logic to handle form submission, like sending an email or saving to a database
//     console.log(formData);
//     // Reset form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="contact-us-container">
//       <p className='font-extrabold text-3xl'>Contact Us</p>
//       <br/>
//       <form action="https://formspree.io/f/xayradlj" method="POST" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className = "Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className='Email'
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             className='Message'
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Customercare;


// import React, { useState } from 'react';

// const Customercare = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//     });
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       backgroundColor: '#1c1c1e',
//       color: '#ffffff',
//       minHeight: '100vh',
//     },
//     title: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       color: '#00adb5',
//     },
//     form: {
//       width: '100%',
//       maxWidth: '500px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '15px',
//       backgroundColor: 'rgba(34, 34, 34, 0.8)',
//       borderRadius: '12px',
//       padding: '20px',
//       boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
//     },
//     formGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     label: {
//       fontSize: '1.1rem',
//       marginBottom: '5px',
//       color: '#00adb5',
//     },
//     input: {
//       padding: '10px',
//       borderRadius: '5px',
//       border: '1px solid #333',
//       backgroundColor: '#333',
//       color: '#ffffff',
//       outline: 'none',
//     },
//     textarea: {
//       padding: '10px',
//       borderRadius: '5px',
//       border: '1px solid #333',
//       backgroundColor: '#333',
//       color: '#ffffff',
//       outline: 'none',
//       minHeight: '100px',
//       resize: 'vertical',
//     },
//     button: {
//       padding: '10px',
//       fontSize: '1rem',
//       fontWeight: 'bold',
//       borderRadius: '5px',
//       border: 'none',
//       backgroundColor: '#00adb5',
//       color: '#ffffff',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <p style={styles.title}>Contact Us</p>
//       <form action="https://formspree.io/f/xayradlj" method="POST" onSubmit={handleSubmit} style={styles.form}>
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
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
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
      backgroundColor: '#1c1c1e',
      color: '#ffffff',
      minHeight: '100vh',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#00adb5',
    },
    form: {
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      backgroundColor: 'rgba(34, 34, 34, 0.8)',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '1.1rem',
      marginBottom: '5px',
      color: '#00adb5',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #333',
      backgroundColor: '#333',
      color: '#ffffff',
      outline: 'none',
    },
    textarea: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #333',
      backgroundColor: '#333',
      color: '#ffffff',
      outline: 'none',
      minHeight: '100px',
      resize: 'vertical',
    },
    button: {
      padding: '10px',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#00adb5',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    message: {
      color: submitted ? 'green' : 'red',
      margin: '10px 0',
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