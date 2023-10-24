import React from 'react'
import'../component/TourDashboard.css'
function TourDashboard()  {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://holiday-api-zj3a.onrender.com/api/v1/tour/all"
        );
        setTourz(response.data); // Assuming the data is an array of tours
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
  return (
    <div className="tourdash">Tour Dashboard</div>
  )
}

export default TourDashboard