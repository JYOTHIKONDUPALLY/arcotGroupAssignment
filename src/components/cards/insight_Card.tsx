import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './insight_card.css'; // Import your custom CSS file here

interface InsightSummary {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
}

const InsightCard: React.FC<{
  insightSummary: InsightSummary;
}> = ({ insightSummary }) => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="insight-card">
      <Slider {...settings}>
        <div className="data-item">
          <h3>Total Queries</h3>
          <p>{insightSummary.total_queries}</p>
        </div>
        <div className="data-item">
          <h3>Successful Queries</h3>
          <p>{insightSummary.successful_queries}</p>
        </div>
        <div className="data-item">
          <h3>Failed Queries</h3>
          <p>{insightSummary.failed_queries}</p>
        </div>
        <div className="data-item">
          <h3>Average Response Time</h3>
          <p>{insightSummary.average_response_time}</p>
        </div>
      </Slider>
    </div>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

export default InsightCard;
