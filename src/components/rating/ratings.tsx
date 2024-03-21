import React from 'react';
import './Rating.css'; 

interface RatingData {
  rating: number;
  count: number;
}

const Rating: React.FC<{ ratings: RatingData[] }> = ({ ratings }) => {
  const maxCount = Math.max(...ratings.map(data => data.count));

  const stars = ratings.map((ratingData) => {
    const { rating, count } = ratingData;
    const percentage = (count / maxCount) * 100;
    const barClassName = `bar-${rating}`;

    return (
      <div className="row" key={rating}>
        <div className="side">
          <div>{rating} star</div>
        </div>
        <div className="middle">
          <div className="bar-container">
            <div className={`bar ${barClassName}`} style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
        <div className="side right">
          <div>{count}</div>
        </div>
      </div>
    );
  });

  const averageRating = (ratings.reduce((total, data) => total + data.rating * data.count, 0) / ratings.reduce((total, data) => total + data.count, 0)).toFixed(1);

  return (
    <div className='Rating'>
      <p>{averageRating} average based on {ratings.reduce((total, data) => total + data.count, 0)} reviews.</p>
      {stars}
    </div>
  );
};

export default Rating;
