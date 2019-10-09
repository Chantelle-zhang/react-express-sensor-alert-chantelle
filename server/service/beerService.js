const axios = require('axios/index');


const BeerData = [
  {
    id: '1',
    name: 'Pilsner',
    minStoreTemp: '4',
    maxStoreTemp: '6',
    currentTemp: null
  },
  {
    id: '2',
    name: 'IPA',
    minStoreTemp: '5',
    maxStoreTemp: '6',
    currentTemp: null
  },
  {
    id: '3',
    name: 'Lager',
    minStoreTemp: '4',
    maxStoreTemp: '7',
    currentTemp: null
  },
  {
    id: '4',
    name: 'Stout',
    minStoreTemp: '6',
    maxStoreTemp: '8',
    currentTemp: null
  },
  {
    id: '5',
    name: 'Pale Ale',
    minStoreTemp: '4',
    maxStoreTemp: '6',
    currentTemp: null
  }
];


export const getTemperatureData = () => {

  const response = Promise.all([...BeerData].map((beer) => {
    const url = `https://temperature-sensor-service.herokuapp.com/sensor/${beer.id}`;
    return axios.get(url);
  }));
  return response;
};

export const transformBeerData = (rowData) => {
  const newBeerData = [...BeerData];
  const currentTempData = [...rowData].map((item) => item.data);
  newBeerData.map((beer) => {
    beer.currentTemp = currentTempData.find((item) => item.id === beer.id).temperature;
    beer.isSafe = (beer.currentTemp >= beer.minStoreTemp && beer.currentTemp <= beer.maxStoreTemp);
  });
  return newBeerData;

};
