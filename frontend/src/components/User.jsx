// import React from 'react'
// // import Login from './Login'

// export default function User() {
//   var isUserLogged = localStorage.getItem('isUserLogged');
//   console.log(isUserLogged);

//   function handleLogout() {
//     isUserLogged = false;
//     // console.log(isUserLogged)
//     localStorage.setItem('isUserLogged', false);
//     localStorage.setItem('currentUser', '{}');
//     window.location.href = '/Login';
//   }

//   if (isUserLogged==='true') {
//     const currUser = JSON.parse(localStorage.getItem('currentUser'));

//     return (
//       <div>
//         <button onClick={handleLogout}>Logout</button>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{currUser.name}</td>
//               <td>{currUser.email}</td>
//               <td>{currUser.phoneNumber}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );

//   } else {
//     window.location.href = '/Login';
//   }
// }



import React, { useState, useEffect } from 'react';
export default function User() {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [currUser, setCurrUser] = useState({ name: '', email: '', phoneNumber: '' });

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isUserLogged') === 'true';
        setIsUserLogged(loggedInStatus);

        if (loggedInStatus) {
            try {
                const user = JSON.parse(localStorage.getItem('currentUser')) || {};
                setCurrUser(user);
            } catch (error) {
                console.error('Error parsing currentUser:', error);
            }
        } else {
            window.location.href = '/Login';
        }
    }, []);

    const logout = () => {
        localStorage.setItem('isUserLogged', false);
        localStorage.setItem('currentUser', '{}');
        window.location.href = '/Login';
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
        logoutButton: {
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#00adb5',
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginBottom: '20px',
        },
        table: {
            width: '100%',
            maxWidth: '500px',
            borderCollapse: 'collapse',
            marginTop: '20px',
            backgroundColor: '#333',
            borderRadius: '8px',
            overflow: 'hidden',
        },
        th: {
            padding: '10px',
            fontWeight: 'bold',
            backgroundColor: '#444',
            color: '#00adb5',
            textAlign: 'left',
        },
        td: {
            padding: '10px',
            textAlign: 'left',
            color: '#ddd',
        },
    };

    return (
        <div style={styles.container}>
            <button onClick={logout} style={styles.logoutButton}>
                Logout
            </button>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>{currUser.name}</td>
                        <td style={styles.td}>{currUser.email}</td>
                        <td style={styles.td}>{currUser.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
