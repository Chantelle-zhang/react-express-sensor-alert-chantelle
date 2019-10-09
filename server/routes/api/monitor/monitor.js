const axios = require('axios/index');
const express = require('express');
const router = express.Router();
const BeerData = [
    {id: '1', name: 'Pilsner', minStoreTemp: '4', maxStoreTemp: '6', currentTemp: null},
    {id: '2', name: 'IPA', minStoreTemp: '5', maxStoreTemp: '6', currentTemp: null},
    {id: '3', name: 'Lager', minStoreTemp: '4', maxStoreTemp: '7', currentTemp: null},
    {id: '4', name: 'Stout', minStoreTemp: '6', maxStoreTemp: '8', currentTemp: null},
    {id: '5', name: 'Pale Ale', minStoreTemp: '4', maxStoreTemp: '6', currentTemp: null}
];
 /* the api wrap the result of 5 api call with different id  to a complete list*/
 /* then transform the data and add new property 'isSafe' to beer object */
router.get('/', async (req, res) => {
    try {
        const newBeerData=[...BeerData];
        await Promise.all([...BeerData].map((beer) => {
            const url = `https://temperature-sensor-service.herokuapp.com/sensor/${beer.id}`;
            return axios.get(url)
        })).then((response) => {
            const currentTempData=[...response].map((item)=>item.data);
            newBeerData.map((beer) => {
                beer.currentTemp = currentTempData.find((item)=>item.id===beer.id).temperature;
                beer.isSafe = (beer.currentTemp >= beer.minStoreTemp && beer.currentTemp <= beer.maxStoreTemp)
            })
        });
        res.json(newBeerData)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
