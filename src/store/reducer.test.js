import { isLoading,beerData,unSafeBeers } from './reducer';
import {
  LOADING_START,
  LOADING_END,
  LOADING_ERROR,
  SET_ALERT,
  SAVE_DATA_TO_STORE,
} from './ActionCreators/actionTypes';


describe('test loading reducer', () => {

  it('should return the initial state', () => {
    expect(isLoading(null, {})).toEqual(null)
  })

  it('test handle LOADING_START ', () => {
    expect(isLoading(null, {
      type: LOADING_START
    })).toEqual(true)
  })

  it('test handle LOADING_END ', () => {
    expect(isLoading(null, {
      type: LOADING_END
    })).toEqual(false)
  })

  it('test handle LOADING_ERROR ', () => {
    expect(isLoading(null, {
      type: LOADING_ERROR
    })).toEqual('error')
  })

});

describe('test beerData reducer', () => {

  it('test SAVE_DATA_TO_STORE', () => {
    expect(beerData([], {
      type: SAVE_DATA_TO_STORE,
      data: [
        {
          "id": "1",
          "name": "Pilsner",
          "minStoreTemp": "4",
          "maxStoreTemp": "6",
          "currentTemp": 7,
          "isSafe": false
        },
        {
          "id": "2",
          "name": "IPA",
          "minStoreTemp": "5",
          "maxStoreTemp": "6",
          "currentTemp": 8,
          "isSafe": false
        },
        {
          "id": "3",
          "name": "Lager",
          "minStoreTemp": "4",
          "maxStoreTemp": "7",
          "currentTemp": 6,
          "isSafe": true
        },
        {
          "id": "4",
          "name": "Stout",
          "minStoreTemp": "6",
          "maxStoreTemp": "8",
          "currentTemp": 5,
          "isSafe": false
        },
        {
          "id": "5",
          "name": "Pale Ale",
          "minStoreTemp": "4",
          "maxStoreTemp": "6",
          "currentTemp": 3,
          "isSafe": false
        }
      ]
    }))
      .toEqual(
        [
          {
            "id": "1",
            "name": "Pilsner",
            "minStoreTemp": "4",
            "maxStoreTemp": "6",
            "currentTemp": 7,
            "isSafe": false
          },
          {
            "id": "2",
            "name": "IPA",
            "minStoreTemp": "5",
            "maxStoreTemp": "6",
            "currentTemp": 8,
            "isSafe": false
          },
          {
            "id": "3",
            "name": "Lager",
            "minStoreTemp": "4",
            "maxStoreTemp": "7",
            "currentTemp": 6,
            "isSafe": true
          },
          {
            "id": "4",
            "name": "Stout",
            "minStoreTemp": "6",
            "maxStoreTemp": "8",
            "currentTemp": 5,
            "isSafe": false
          },
          {
            "id": "5",
            "name": "Pale Ale",
            "minStoreTemp": "4",
            "maxStoreTemp": "6",
            "currentTemp": 3,
            "isSafe": false
          }
        ]
      )
  })
});

  describe('test unSafeBeers reducer', () => {

    it('test SET_ALERT', () => {
      expect(unSafeBeers([], {
        type: SET_ALERT,
        unSafeList: [
          {
            "id": "1",
            "name": "Pilsner",
            "minStoreTemp": "4",
            "maxStoreTemp": "6",
            "currentTemp": 7,
            "isSafe": false
          },
          {
            "id": "2",
            "name": "IPA",
            "minStoreTemp": "5",
            "maxStoreTemp": "6",
            "currentTemp": 8,
            "isSafe": false
          },
          {
            "id": "4",
            "name": "Stout",
            "minStoreTemp": "6",
            "maxStoreTemp": "8",
            "currentTemp": 5,
            "isSafe": false
          },
          {
            "id": "5",
            "name": "Pale Ale",
            "minStoreTemp": "4",
            "maxStoreTemp": "6",
            "currentTemp": 3,
            "isSafe": false
          }
        ]
      }))
        .toEqual(
          [
            {
              "id": "1",
              "name": "Pilsner",
              "minStoreTemp": "4",
              "maxStoreTemp": "6",
              "currentTemp": 7,
              "isSafe": false
            },
            {
              "id": "2",
              "name": "IPA",
              "minStoreTemp": "5",
              "maxStoreTemp": "6",
              "currentTemp": 8,
              "isSafe": false
            },
            {
              "id": "4",
              "name": "Stout",
              "minStoreTemp": "6",
              "maxStoreTemp": "8",
              "currentTemp": 5,
              "isSafe": false
            },
            {
              "id": "5",
              "name": "Pale Ale",
              "minStoreTemp": "4",
              "maxStoreTemp": "6",
              "currentTemp": 3,
              "isSafe": false
            }
          ]
        )
    })
  });
