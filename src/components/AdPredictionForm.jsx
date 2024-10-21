// // src/components/AdPredictionForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import './AdPredictionForm.css';

// const AdPredictionForm = () => {
//   const [formData, setFormData] = useState({
//     age: '',
//     gender: '',
//     deviceType: '',
//     interestCategory: '',
//   });
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/predict', formData);
//       setPrediction(response.data.prediction);
//     } catch (error) {
//       console.error('Prediction Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="predict" className="prediction-form">
//       <h2>Predict Ad Click</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           placeholder="Enter Age"
//           required
//         />
//         <select name="gender" value={formData.gender} onChange={handleChange} required>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="text"
//           name="deviceType"
//           value={formData.deviceType}
//           onChange={handleChange}
//           placeholder="Enter Device Type (e.g., mobile, desktop)"
//           required
//         />
//         <input
//           type="text"
//           name="interestCategory"
//           value={formData.interestCategory}
//           onChange={handleChange}
//           placeholder="Enter Interest Category (e.g., sports, tech)"
//           required
//         />
//         <button type="submit" disabled={loading}>{loading ? 'Predicting...' : 'Predict Click'}</button>
//       </form>

//       {prediction !== null && (
//         <div className="result">
//           <h3>Prediction Result:</h3>
//           <p>{prediction ? 'The user is likely to click the ad!' : 'The user is unlikely to click the ad.'}</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AdPredictionForm;

// src/components/AdPredictionForm.jsx
import React, { useState } from "react";
import axios from "axios";
import "./AdPredictionForm.css";

const AdPredictionForm = () => {
  const [formData, setFormData] = useState({
    dailyTimeSpent: "",
    age: "",
    areaIncome: "",
    dailyInternetUsage: "",
    gender: "",
    city: "",
    country: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Prediction Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predict" className="prediction-form">
      <h2>Predict Ad Click</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="dailyTimeSpent"
          value={formData.dailyTimeSpent}
          onChange={handleChange}
          placeholder="Time Spent on Site (e.g., 62.26)"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
          required
        />
        <input
          type="number"
          name="areaIncome"
          value={formData.areaIncome}
          onChange={handleChange}
          placeholder="Area Income (e.g., 69481.85)"
          required
        />
        <input
          type="number"
          name="dailyInternetUsage"
          value={formData.dailyInternetUsage}
          onChange={handleChange}
          placeholder="Daily Internet Usage(in MBs) (e.g., 172.83)"
          required
        />
        <select
          className="gender-select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter City (e.g., Lisafort)"
          required
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter Country (e.g., Svalbard & Jan Mayen Islands)"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Predict Click"}
        </button>
      </form>

      {prediction !== null && (
        <div className="result">
          <h3>Prediction Result:</h3>
          <p>
            {prediction
              ? "The user is likely to click the ad!"
              : "The user is unlikely to click the ad."}
          </p>
        </div>
      )}
    </section>
  );
};

export default AdPredictionForm;
