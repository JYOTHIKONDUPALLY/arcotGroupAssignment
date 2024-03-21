import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../redux/stores";
import { fetchAIDataRequest, fetchAIDataSuccess, fetchAIDataFailure } from '../../redux/actions';
import BarChartComponent from '../charts/barchart';
import LineChartComponent from '../charts/linechart';
import InsightCard from '../cards/insight_Card';
import Rating from '../rating/ratings';
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { aiData, isLoading, error } = useSelector((state: RootState) => state.ai);
  const [toggleButton, setToggleButton] = useState<'day' | 'week'>('day');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchAIDataRequest());
        const response = await fetch('/ai-data.json'); 
  
        if (!response.ok) {
          throw new Error('Failed to fetch AI data');
        }
  
        const data = await response.json();
      
        dispatch(fetchAIDataSuccess(data));
      } catch (error:any) {
        dispatch(fetchAIDataFailure(error.message));
      }
    };
  
    fetchData();
  }, [dispatch]);

  const handleToggle = (type: 'day' | 'week') => {
    setToggleButton(type);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='DashboardContainer'>
      <div className='insightcard'>
      {aiData && <InsightCard insightSummary={aiData.insight_summary} />}
      </div>
      <div className='ResponseTime'>
      <h2>Response Times-<span style={{ fontSize: '20px' }}>{toggleButton}</span></h2>
      {aiData && toggleButton === 'day' && <LineChartComponent data={aiData.response_times?.day_wise || []} width={300} height={200} />}
      {aiData && toggleButton === 'week' && <LineChartComponent data={aiData.response_times?.week_wise || []} width={300} height={200}  />}
      <div className='buttonContainer'>
        <button className={`button ${toggleButton === 'day' ? 'activeButton' : ''}`} onClick={() => handleToggle('day')}>Day Wise</button>
        <button className={`button ${toggleButton === 'week' ? 'activeButton' : ''}`} onClick={() => handleToggle('week')}>Week Wise</button>
      </div>
    </div>

{/* rating */}
<div className='RatingContainer'>
  <h2>User Satisfaction</h2>
  {aiData?.user_satisfaction && <Rating ratings={aiData.user_satisfaction.ratings}/>}
</div>



   <div className='categoryDistribution'>
      <h2>Category Distribution</h2>
      <div className='categorychart'>  {aiData?.user_satisfaction && <BarChartComponent data={aiData.category_distribution} />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
