// import React from 'react';
// import ImageCarousel from './ImageCarousel';

// function Home() {
//   let images = [
//     "https://www.nic.in/wp-content/uploads/2022/07/kisan-suvidha-info.png",
//     "https://rishihood.edu.in/wp-content/uploads/2020/12/Farm-scaled-1.jpg",
//     "https://cdn.zeebiz.com/hindi/sites/default/files/2023/09/02/152275-pm-kisan-15th-installment1.jpg?im=FitAndFill=(1200,900)",
//     "https://static.india.com/wp-content/uploads/2021/07/PM-Kisan-Samman-Yojana-.jpg?impolicy=Medium_Resize&w=1200&h=800",
//     "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//   ];

//   const styles = {
//     container: {
//       backgroundColor: '#1c1c1e',
//       padding: '20px',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     carouselWrapper: {
//       width: '80%',
//       borderRadius: '15px',
//       overflow: 'hidden',
//       boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
//       position: 'relative',
//     },
//     overlay: {
//       position: 'absolute',
//       top: '0',
//       left: '0',
//       right: '0',
//       bottom: '0',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       color: '#ffffff',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       opacity: 0.9,
//     },
//     title: {
//       color: '#00adb5',
//       textAlign: 'center',
//       fontSize: '32px',
//       margin: '20px 0',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.carouselWrapper}>
//         <div style={styles.overlay}>Welcome to Kisan Suvidha</div>
//         <ImageCarousel images={images} />
//       </div>
//       <div style={styles.title}>Explore Our Services</div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import ImageCarousel from './ImageCarousel';
import DailyNews from './DailyNews';

function Home() {
  let images = [
    "https://www.nic.in/wp-content/uploads/2022/07/kisan-suvidha-info.png",
    "https://rishihood.edu.in/wp-content/uploads/2020/12/Farm-scaled-1.jpg",
    "https://cdn.zeebiz.com/hindi/sites/default/files/2023/09/02/152275-pm-kisan-15th-installment1.jpg?im=FitAndFill=(1200,900)",
    "https://static.india.com/wp-content/uploads/2021/07/PM-Kisan-Samman-Yojana-.jpg?impolicy=Medium_Resize&w=1200&h=800",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const styles = {
    container: {
      backgroundColor: '#1c1c1e',
      padding: '20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselWrapper: {
      width: '80%',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 6px 30px rgba(0, 0, 0, 0.7)',
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
      opacity: 0.9,
    },
    title: {
      color: '#00adb5',
      textAlign: 'center',
      fontSize: '32px',
      margin: '20px 0',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.carouselWrapper}>
        <div style={styles.overlay}>Welcome to Kisan Suvidha</div>
        <ImageCarousel images={images} />
      </div>
      <div style={styles.title}>Explore Our Services</div>
      <DailyNews />
    </div>
  );
}

export default Home;
