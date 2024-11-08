// import React from 'react';
// import Khata from './Khata';

// const Ecommerce = () => {
//   const styles = {
//     container: {
//       padding: '20px',
//       backgroundColor: '#1a1a1a',
//       color: '#ffffff',
//       borderRadius: '15px',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
//     },
//     heading: {
//       fontSize: '2.5rem',
//       marginBottom: '20px',
//       color: '#00adb5',
//       textAlign: 'center',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <p style={styles.heading}>E-Commerce</p>
//       <Khata />
//     </div>
//   );
// };

// export default Ecommerce;



import React from 'react';
import Khata from './Khata';

const Ecommerce = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
      width: '80%',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#00adb5',
      textAlign: 'center',
    },
    sectionContainer: {
      marginTop: '40px',
    },
    itemContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    item: {
      width: '200px',
      margin: '10px',
      textAlign: 'center',
      border: '1px solid #555',
      borderRadius: '8px',
      padding: '10px',
      backgroundColor: '#333',
      color: '#ffffff',
    },
    itemImage: {
      width: '100%',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    itemDescription: {
      color: '#bbb',
      fontSize: '14px',
    },
    itemPrice: {
      color: '#00ff6a',
      fontWeight: 'bold',
    },
    sectionHeading: {
      fontSize: '2rem',
      marginBottom: '15px',
      color: '#ff7f50',
    },
    partitionLine: {
      height: '3px',
      backgroundColor: '#444',
      margin: '20px 0',
    },
  };

  const categories = [
    { name: 'Seeds and Planting Material', items: ['Vegetable Seeds', 'Grain Seeds', 'Herb Seeds', 'Fruit Seeds'] },
    { name: 'Fertilizers and Soil Amendments', items: ['Organic Compost', 'Chemical Fertilizers', 'Manure', 'Soil Conditioner'] },
    { name: 'Pesticides and Insecticides', items: ['Organic Pesticides', 'Fungicides', 'Herbicides', 'Insect Repellents'] },
    { name: 'Farm Machinery and Tools', items: ['Tractors', 'Tillers', 'Sprayers', 'Plows'] },
    { name: 'Irrigation Equipment', items: ['Drip Irrigation Kits', 'Water Pumps', 'Irrigation Pipes', 'Sprinklers'] },
    { name: 'Greenhouse and Nursery Supplies', items: ['Greenhouse Kits', 'Seed Trays', 'Shade Nets', 'Plastic Mulch'] },
    { name: 'Livestock Supplies', items: ['Animal Feed', 'Veterinary Medicines', 'Fencing Nets', 'Feeders'] },
    { name: 'Protective Farming Gear', items: ['Gloves', 'Boots', 'Sun Protection Hats', 'Overalls'] },
    { name: 'Soil Testing and Measurement Tools', items: ['pH Meters', 'Soil Moisture Meters', 'Temperature Monitors', 'Conductivity Meters'] },
    { name: 'Fencing and Netting', items: ['Electric Fencing', 'Bird Netting', 'Plastic Fencing', 'Shade Netting'] }
  ];

  return (
    <div style={styles.container}>
      <p style={styles.heading}>Essential Farming Products for E-Commerce</p>

      {categories.map((category, index) => (
        <div key={index} style={styles.sectionContainer}>
          <p style={styles.sectionHeading}>{category.name}</p>
          <div style={styles.itemContainer}>
            {category.items.map((item, idx) => (
              <div key={idx} style={styles.item}>
                <img style={styles.itemImage} src="https://via.placeholder.com/150" alt={item} />
                <div style={styles.itemDescription}>{item}</div>
                <div style={styles.itemPrice}>Cost: ₹{(idx + 1) * 100}</div>
              </div>
            ))}
          </div>
          {index < categories.length - 1 && <div style={styles.partitionLine}></div>}
        </div>
      ))}

      <Khata />
    </div>
  );
};

export default Ecommerce;
