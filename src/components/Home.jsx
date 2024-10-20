// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Ad Click Predictor</h1>
      <p>Predict ad clicks with high accuracy and efficiency using our advanced model.</p>

      {/* Image Marquee */}
      <div className="image-marquee">
        <div className="marquee-content">
          {/* Only list each image once */}
          <img src="https://www.gourmetads.com/wp-content/uploads/2022/01/learn-more-heinz-300x250-call-to-action.jpg" alt="Ad1" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/06/learn-more-nespresso-300x250-1.jpg.webp" alt="Ad2" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/02/300x250-barilla.jpg.webp" alt="Ad3" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2022/01/buy-now-kraft-mac-and-cheese-300x250-call-to-action.jpg.webp" alt="Ad4" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2022/01/order-now-ben-and-jerrys-300x250-call-to-action.jpg.webp" alt="Ad4" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2022/01/get-coupon-food-saver-300x250-call-to-action.jpg.webp" alt="Ad4" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/06/try-now-starbucks-300x250-1.jpg.webp" alt="Ad5" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/06/shop-now-san-pellegrino-sparkling-water-300x250-1.jpg.webp" alt="Ad5" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2023/06/300x250-uber-eats.gif" alt="Ad5" />
          <img src="https://www.gourmetads.com/wp-content/uploads/2019/02/300x250-weber.jpg.webp" alt="Ad5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
