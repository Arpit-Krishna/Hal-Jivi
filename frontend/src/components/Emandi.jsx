import React from 'react';
import Khata from './Khata';

const Emandi = () => {
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
      width: '150px',
      height: '150px',
      margin: '0 auto',
      borderRadius: '5px',
      marginBottom: '10px',
      objectFit: 'cover',
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

  return (
    <div style={styles.container}>
      <p style={styles.heading}>Essential Farming Products for E-Mandi</p>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Fruits</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fruit 1"
            />
            <div style={styles.itemDescription}>Apples</div>
            <div style={styles.itemPrice}>Cost: ₹400</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fruit 2"
            />
            <div style={styles.itemDescription}>Mangoes</div>
            <div style={styles.itemPrice}>Cost: ₹650</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fruit 3"
            />
            <div style={styles.itemDescription}>Bananas</div>
            <div style={styles.itemPrice}>Cost: ₹200</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fruit 4"
            />
            <div style={styles.itemDescription}>Oranges</div>
            <div style={styles.itemPrice}>Cost: ₹300</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Vegetables</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Vegetable 1"
            />
            <div style={styles.itemDescription}>Potatoes</div>
            <div style={styles.itemPrice}>Cost: ₹100</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Vegetable 2"
            />
            <div style={styles.itemDescription}>Onions</div>
            <div style={styles.itemPrice}>Cost: ₹150</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Vegetable 3"
            />
            <div style={styles.itemDescription}>Carrots</div>
            <div style={styles.itemPrice}>Cost: ₹120</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Vegetable 4"
            />
            <div style={styles.itemDescription}>Spinach</div>
            <div style={styles.itemPrice}>Cost: ₹50</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Grains and Cereals</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Grain 1"
            />
            <div style={styles.itemDescription}>Rice</div>
            <div style={styles.itemPrice}>Cost: ₹500</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Grain 2"
            />
            <div style={styles.itemDescription}>Wheat</div>
            <div style={styles.itemPrice}>Cost: ₹600</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Grain 3"
            />
            <div style={styles.itemDescription}>Barley</div>
            <div style={styles.itemPrice}>Cost: ₹450</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Grain 4"
            />
            <div style={styles.itemDescription}>Oats</div>
            <div style={styles.itemPrice}>Cost: ₹350</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Pulses and Lentils</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Pulse 1"
            />
            <div style={styles.itemDescription}>Red Lentils</div>
            <div style={styles.itemPrice}>Cost: ₹250</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Pulse 2"
            />
            <div style={styles.itemDescription}>Black Gram</div>
            <div style={styles.itemPrice}>Cost: ₹300</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Pulse 3"
            />
            <div style={styles.itemDescription}>Green Gram</div>
            <div style={styles.itemPrice}>Cost: ₹200</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Pulse 4"
            />
            <div style={styles.itemDescription}>Chickpeas</div>
            <div style={styles.itemPrice}>Cost: ₹280</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Seeds</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Seed 1"
            />
            <div style={styles.itemDescription}>Mustard Seeds</div>
            <div style={styles.itemPrice}>Cost: ₹150</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Seed 2"
            />
            <div style={styles.itemDescription}>Sunflower Seeds</div>
            <div style={styles.itemPrice}>Cost: ₹180</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Seed 3"
            />
            <div style={styles.itemDescription}>Pumpkin Seeds</div>
            <div style={styles.itemPrice}>Cost: ₹200</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Seed 4"
            />
            <div style={styles.itemDescription}>Vegetable Seeds</div>
            <div style={styles.itemPrice}>Cost: ₹220</div>
          </div>
        </div>
      </div>
{/*       

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Dairy Products</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Dairy 1"
            />
            <div style={styles.itemDescription}>Milk</div>
            <div style={styles.itemPrice}>Cost: ₹50</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Dairy 2"
            />
            <div style={styles.itemDescription}>Ghee</div>
            <div style={styles.itemPrice}>Cost: ₹500</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Dairy 3"
            />
            <div style={styles.itemDescription}>Butter</div>
            <div style={styles.itemPrice}>Cost: ₹300</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Dairy 4"
            />
            <div style={styles.itemDescription}>Yogurt</div>
            <div style={styles.itemPrice}>Cost: ₹120</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Spices and Herbs</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Spice 1"
            />
            <div style={styles.itemDescription}>Turmeric</div>
            <div style={styles.itemPrice}>Cost: ₹80</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Spice 2"
            />
            <div style={styles.itemDescription}>Cumin</div>
            <div style={styles.itemPrice}>Cost: ₹100</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Spice 3"
            />
            <div style={styles.itemDescription}>Coriander</div>
            <div style={styles.itemPrice}>Cost: ₹120</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Spice 4"
            />
            <div style={styles.itemDescription}>Cardamom</div>
            <div style={styles.itemPrice}>Cost: ₹400</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Dry Fruits and Nuts</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Nut 1"
            />
            <div style={styles.itemDescription}>Almonds</div>
            <div style={styles.itemPrice}>Cost: ₹500</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Nut 2"
            />
            <div style={styles.itemDescription}>Cashews</div>
            <div style={styles.itemPrice}>Cost: ₹600</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Nut 3"
            />
            <div style={styles.itemDescription}>Walnuts</div>
            <div style={styles.itemPrice}>Cost: ₹700</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Nut 4"
            />
            <div style={styles.itemDescription}>Raisins</div>
            <div style={styles.itemPrice}>Cost: ₹200</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Fertilizers and Manure</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fertilizer 1"
            />
            <div style={styles.itemDescription}>Organic Compost</div>
            <div style={styles.itemPrice}>Cost: ₹350</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fertilizer 2"
            />
            <div style={styles.itemDescription}>Chemical Fertilizers</div>
            <div style={styles.itemPrice}>Cost: ₹500</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fertilizer 3"
            />
            <div style={styles.itemDescription}>Potash</div>
            <div style={styles.itemPrice}>Cost: ₹400</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Fertilizer 4"
            />
            <div style={styles.itemDescription}>Bio-fertilizers</div>
            <div style={styles.itemPrice}>Cost: ₹450</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Honey and Jaggery</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Honey 1"
            />
            <div style={styles.itemDescription}>Raw Honey</div>
            <div style={styles.itemPrice}>Cost: ₹350</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Honey 2"
            />
            <div style={styles.itemDescription}>Multi-floral Honey</div>
            <div style={styles.itemPrice}>Cost: ₹400</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Honey 3"
            />
            <div style={styles.itemDescription}>Organic Jaggery</div>
            <div style={styles.itemPrice}>Cost: ₹220</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Honey 4"
            />
            <div style={styles.itemDescription}>Palm Jaggery</div>
            <div style={styles.itemPrice}>Cost: ₹250</div>
          </div>
        </div>
      </div>

      <div style={styles.partitionLine}></div>

      <div style={styles.sectionContainer}>
        <p style={styles.sectionHeading}>Medicinal and Aromatic Plants</p>
        <div style={styles.itemContainer}>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Plant 1"
            />
            <div style={styles.itemDescription}>Aloe Vera</div>
            <div style={styles.itemPrice}>Cost: ₹100</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Plant 2"
            />
            <div style={styles.itemDescription}>Ashwagandha</div>
            <div style={styles.itemPrice}>Cost: ₹200</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Plant 3"
            />
            <div style={styles.itemDescription}>Tulsi</div>
            <div style={styles.itemPrice}>Cost: ₹50</div>
          </div>
          <div style={styles.item}>
            <img
              style={styles.itemImage}
              src="https://via.placeholder.com/150"
              alt="Plant 4"
            />
            <div style={styles.itemDescription}>Lemongrass</div>
            <div style={styles.itemPrice}>Cost: ₹120</div>
          </div>
        </div>
      </div> */}
      <Khata />
    </div>
  );
}

export default Emandi;
