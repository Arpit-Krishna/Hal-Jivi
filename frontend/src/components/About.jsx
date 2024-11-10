// import React from 'react'
// import Style from './aboutus.module.css';

// export default function About() {
//   return (
//     <div className = {Style.aboutus}>
//       <div className={Style.aboutus_box}>
//         <div className={Style.aboutus_box_hero}>
//           <div className={Style.aboutus_box_hero_left}>
//             <h1> 👋 About Us.</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sit delectus eum voluptates doloremque consequuntur rem dolor soluta quis, doloribus magni qui ratione temporibus quidem ipsum animi adipisci quam commodi nesciunt molestias blanditiis! Optio nemo veritatis excepturi ratione porro numquam consectetur inventore sit voluptate dolor dolorum eum magnam libero cupiditate, facilis id delectus aperiam et omnis saepe est neque. Facere molestiae incidunt harum maiores laboriosam numquam eveniet eaque voluptas quae doloremque aliquid modi mollitia nesciunt, exercitationem eum tenetur error non. Nisi in odit accusantium saepe, inventore voluptatum, facilis tempora sapiente quaerat voluptatem quisquam doloremque mollitia, hic porro. 
//             </p>
//           </div>
//           <div className={Style.aboutus_box_hero_right}>
//             {/* <Image src={}/> */}
//           </div>

//         </div>
//       </div>
      
//     </div>
//   )
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
            background: '#1c1c1e',
            color: '#ffffff',
        },
        aboutusBox: {
            maxWidth: '800px',
            backgroundColor: 'rgba(50, 50, 50, 0.9)',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
        },
        leaderSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px 0',
            flex: '1 0 100%',
            backgroundColor: '#444',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        },
        memberSection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '15px',
            flex: '1 0 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        },
        heading: {
            fontSize: '2rem',
            color: '#00adb5',
            marginBottom: '10px',
        },
        paragraph: {
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: '#cccccc',
            textAlign: 'center',
        },
        image: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '10px',
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
    };

    const developers = [
        {
            name: 'Arpit Krishna (Leader)',
            description: 'Backend specialist focused on building scalable and efficient server-side applications.',
            imageUrl: require('./assets/Arpit_Krishna-Hal_Jivi.jpg'),
            isLeader: true,
        },
        {
            name: 'Avantika Bajpai',
            description: 'Expert in project management and full-stack development, guiding the team towards success.',
            imageUrl: require('./assets/Avantika_Bajpai-Hal_Jivi.jpg'),
            isLeader: false,
        },
        {
            name: 'Abhishek Swaroop',
            description: 'UI/UX designer dedicated to enhancing user experience through intuitive design.',
            imageUrl: require('./assets/Abhishek_Swaroop-Hal_Jivi.jpg'),
            isLeader: false,
        },
        {
            name: 'Aman Bhaduaria',
            description: 'Full-stack developer with experience in both frontend and backend technologies.',
            imageUrl: require('./assets/Aman_Bhadauria-Hal_Jivi.jpg'),
            isLeader: false,
        },
        {
            name: 'Aryan Trivedi',
            description: 'DevOps engineer with expertise in automation and cloud technologies.',
            imageUrl: require('./assets/Aryan_Trivedi-Hal_Jivi.jpg'),
            isLeader: false,
        },
    ];
    return (
        <div style={styles.aboutus}>
            <div style={styles.aboutusBox}>
                <h1 style={styles.heading}>👋 About Us</h1>
                <p style={styles.paragraph}>
                    We are a team of dedicated developers who strive to create innovative solutions. Here are our team members:
                </p>
                <div style={styles.leaderSection}>
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
                        <div key={index} style={styles.memberSection}>
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
