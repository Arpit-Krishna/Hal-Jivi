// import React from 'react';

// export default function About() {
//     const styles = {
//         aboutus: {
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             minHeight: '100vh',
//             padding: '20px',
//             background: '#121212',
//             color: '#e0e0e0',
//         },
//         aboutusBox: {
//             maxWidth: '900px',
//             padding: '40px',
//             borderRadius: '15px',
//         },
//         leaderSection: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: '15px',
//             flex: '1 0 100%',
//             background: '#121212',
//             borderRadius: '15px',
//             padding: '30px',
//         },
//         memberSection: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             margin: '15px',
//             flex: '1 0 30%',
//             background: '#121212',
//             borderRadius: '15px',
//             padding: '30px',
//         },
//         heading: {
//             fontSize: '2rem',
//             color: '#00adb5',
//             marginBottom: '10px',
//             fontWeight: 'bold',
//             textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
//         },
//         paragraph: {
//             fontSize: '1rem',
//             lineHeight: 1.6,
//             color: '#e0e0e0',
//             textAlign: 'center',
//             fontWeight: 'bold',
//         },
//         image: {
//             width: '110px',
//             height: '110px',
//             borderRadius: '50%',
//             marginBottom: '15px',
//             border: '3px solid #00adb5',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
//         },
//         developersContainer: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'space-between',
//         },
//         membersRow: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             flexWrap: 'wrap',
//             marginTop: '20px',
//         },
//         blockHoverEffect: {
//             transform: 'scale(1.05)',
//         }
//     };

//     const developers = [
//         {
//             name: 'Arpit Krishna (Project Leader)',
//             description: 'Backend specialist focused on building scalable and efficient server-side applications.',
//             imageUrl: require('./assets/Arpit_Krishna-Hal_Jivi.jpg'),
//         },
//         {
//             name: 'Avantika Bajpai',
//             description: 'Expert in project management and full-stack development, guiding the team towards success.',
//             imageUrl: require('./assets/Avantika_Bajpai-Hal_Jivi.jpg'),
//         },
//         {
//             name: 'Abhishek Swaroop',
//             description: 'UI/UX designer dedicated to enhancing user experience through intuitive design.',
//             imageUrl: require('./assets/Abhishek_Swaroop-Hal_Jivi.jpg'),
//         },
//         {
//             name: 'Aman Bhaduaria',
//             description: 'Full-stack developer with experience in both frontend and backend technologies.',
//             imageUrl: require('./assets/Aman_Bhadauria-Hal_Jivi.jpg'),
//         },
//         {
//             name: 'Aryan Trivedi',
//             description: 'DevOps engineer with expertise in automation and cloud technologies.',
//             imageUrl: require('./assets/Aryan_Trivedi-Hal_Jivi.jpg'),
//         },
//     ];

//     return (
//         <div style={styles.aboutus}>
//             <div style={styles.aboutusBox}>
//                 <h1 style={styles.heading}>👋 About Us</h1>
//                 <p style={styles.paragraph}>
//                     We are a team of dedicated developers who strive to create innovative solutions.
//                 </p>
//                 <div
//                     style={{ ...styles.leaderSection, ...(styles.blockHoverEffect) }}
//                 >
//                     <img 
//                         src={developers[0].imageUrl} 
//                         alt={developers[0].name} 
//                         style={styles.image} 
//                     />
//                     <h2 style={styles.heading}>{developers[0].name}</h2>
//                     <p style={styles.paragraph}>{developers[0].description}</p>
//                 </div>
//                 <div style={styles.membersRow}>
//                     {developers.slice(1).map((developer, index) => (
//                         <div 
//                             key={index} 
//                             style={{ ...styles.memberSection, ...(styles.blockHoverEffect) }}
//                         >
//                             <img 
//                                 src={developer.imageUrl} 
//                                 alt={developer.name} 
//                                 style={styles.image} 
//                             />
//                             <h2 style={styles.heading}>{developer.name}</h2>
//                             <p style={styles.paragraph}>{developer.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';

export default function About() {
    const styles = {
        aboutus: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
            background: '#121212',
            color: '#e0e0e0',
        },
        aboutusBox: {
            maxWidth: '900px',
            padding: '40px',
            borderRadius: '15px',
        },
        leaderSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px',
            flex: '1 0 100%',
            background: 'linear-gradient(135deg, #111, #444)',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        memberSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px',
            flex: '1 0 30%',
            background: 'linear-gradient(135deg, #333, #111)',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
            transition: 'transform 0.3s, box-shadow 0.3s',
        },
        heading: {
            fontSize: '2rem',
            color: '#00adb5',
            marginBottom: '10px',
            fontWeight: 'bold',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
        },
        paragraph: {
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#e0e0e0',
            textAlign: 'center',
            fontWeight: 'bold',
        },
        image: {
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            marginBottom: '15px',
            border: '3px solid #00adb5',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
        },
        developersContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        membersRow: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginTop: '20px',
        },
        blockHoverEffect: {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
        }
    };

    const developers = [
        {
            name: 'Arpit Krishna (Project Leader)',
            description: 'Backend specialist focused on building scalable and efficient server-side applications.',
            imageUrl: require('./assets/Arpit_Krishna-Hal_Jivi.jpg'),
        },
        {
            name: 'Avantika Bajpai',
            description: 'Expert in project management and full-stack development, guiding the team towards success.',
            imageUrl: require('./assets/Avantika_Bajpai-Hal_Jivi.jpg'),
        },
        {
            name: 'Abhishek Swaroop',
            description: 'UI/UX designer dedicated to enhancing user experience through intuitive design.',
            imageUrl: require('./assets/Abhishek_Swaroop-Hal_Jivi.jpg'),
        },
        {
            name: 'Aman Bhadauria',
            description: 'Full-stack developer with experience in both frontend and backend technologies.',
            imageUrl: require('./assets/Aman_Bhadauria-Hal_Jivi.jpg'),
        },
        {
            name: 'Aryan Trivedi',
            description: 'DevOps engineer with expertise in automation and cloud technologies.',
            imageUrl: require('./assets/Aryan_Trivedi-Hal_Jivi.jpg'),
        },
    ];

    return (
        <div style={styles.aboutus}>
            <div style={styles.aboutusBox}>
                <h1 style={styles.heading}>👋 About Us</h1>
                <p style={styles.paragraph}>
                    We are a team of dedicated developers who strive to create innovative solutions.
                </p>
                <div
                    style={{ ...styles.leaderSection, ...(styles.blockHoverEffect) }}
                >
                    <img 
                        src={developers[0].imageUrl} 
                        alt={developers[0].name} 
                        style={styles.image} 
                    />
                    <h2 style={styles.heading}>{developers[0].name}</h2>
                    <p style={styles.paragraph}>{developers[0].description}</p>
                </div>
                <div style={styles.membersRow}>
                    {developers.slice(1).map((developer, index) => (
                        <div 
                            key={index} 
                            style={{ ...styles.memberSection, ...(styles.blockHoverEffect) }}
                        >
                            <img 
                                src={developer.imageUrl} 
                                alt={developer.name} 
                                style={styles.image} 
                            />
                            <h2 style={styles.heading}>{developer.name}</h2>
                            <p style={styles.paragraph}>{developer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
