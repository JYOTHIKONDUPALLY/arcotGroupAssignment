export const FETCH_AI_DATA_REQUEST = 'FETCH_AI_DATA_REQUEST';
export const FETCH_AI_DATA_SUCCESS = 'FETCH_AI_DATA_SUCCESS';
export const FETCH_AI_DATA_FAILURE = 'FETCH_AI_DATA_FAILURE';
export const SET_SELECTED_CHART_TYPE = 'SET_SELECTED_CHART_TYPE';

export const fetchAIDataRequest = () => ({
  type: FETCH_AI_DATA_REQUEST,
});

export const fetchAIDataSuccess = (data: any) => ({
  type: FETCH_AI_DATA_SUCCESS,
  payload: data,
});

export const fetchAIDataFailure = (error: string) => ({
  type: FETCH_AI_DATA_FAILURE,
  payload: error,
});

export const setSelectedChartType = (chartType: string) => ({
  type: SET_SELECTED_CHART_TYPE,
  payload: chartType,
});
