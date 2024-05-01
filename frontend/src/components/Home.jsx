import React from 'react';
import ImageCarousel from "./ImageCarousel";

function Home() {
  
let images = [
  "https://www.nic.in/wp-content/uploads/2022/07/kisan-suvidha-info.png",
  "https://rishihood.edu.in/wp-content/uploads/2020/12/Farm-scaled-1.jpg",
  "https://cdn.zeebiz.com/hindi/sites/default/files/2023/09/02/152275-pm-kisan-15th-installment1.jpg?im=FitAndFill=(1200,900)",
  "https://static.india.com/wp-content/uploads/2021/07/PM-Kisan-Samman-Yojana-.jpg?impolicy=Medium_Resize&w=1200&h=800",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

    return (
      <div>
        <div className='m-auto'>
            <ImageCarousel images = {images}/>
        </div></div>
    );
  }
  export default Home;