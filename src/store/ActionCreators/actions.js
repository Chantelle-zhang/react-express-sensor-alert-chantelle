import axios from 'axios';
import {
  LOADING_END,
  LOADING_START,
  LOADING_ERROR,
  SAVE_DATA_TO_STORE,
  SET_ALERT,
} from './actionTypes';

export const setAlert = (beers) => (dispatch) => {
  const unSafeList = [...beers].filter((beer) => beer.isSafe === false);
  dispatch({
    type: SET_ALERT,
    unSafeList

  });
};

export const fetchData = (url) => async (dispatch) => {

  try {

    dispatch({
      type: LOADING_START
    });

    const res = await axios.get(url);

    dispatch({
      type: SAVE_DATA_TO_STORE,
      data: res.data
    });

    dispatch(setAlert(res.data));

    dispatch({
      type: LOADING_END
    });

  } catch (err) {
    dispatch({
      type: LOADING_ERROR,
    });
  }
};

