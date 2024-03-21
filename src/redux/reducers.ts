import { combineReducers } from 'redux';
import {
  FETCH_AI_DATA_REQUEST,
  FETCH_AI_DATA_SUCCESS,
  FETCH_AI_DATA_FAILURE,
  SET_SELECTED_CHART_TYPE,
} from './actions';

interface AIState {
  aiData: any;
  isLoading: boolean;
  error: string | null;
  selectedChartType: string;
}

const initialAIState: AIState = {
  aiData: null,
  isLoading: false,
  error: null,
  selectedChartType: 'bar', // Default chart type
};

const aiReducer = (state = initialAIState, action: any) => {
  switch (action.type) {
    case FETCH_AI_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_AI_DATA_SUCCESS:
      return {
        ...state,
        aiData: action.payload,
        isLoading: false,
      };
    case FETCH_AI_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_SELECTED_CHART_TYPE:
      return {
        ...state,
        selectedChartType: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  ai: aiReducer,
});
