import {
  LOADING_START,
  LOADING_END,
  LOADING_ERROR,
  SET_ALERT,
  SAVE_DATA_TO_STORE,
} from './ActionCreators/actionTypes';

export const isLoading = (state = null, action) => {

  switch (action.type) {

    case LOADING_START:
      return true;

    case  LOADING_END:

      return false;

    case LOADING_ERROR:
      return 'error';

    default:
      return state;
  }
};

export const beerData = (state = [], action) => {

  switch (action.type) {

    case SAVE_DATA_TO_STORE:
      return action.data;

    default:
      return state;
  }
};


export const unSafeBeers = (state = [], action) => {

  switch (action.type) {

    case SET_ALERT:
      return action.unSafeList;

    default:
      return state;
  }
};
