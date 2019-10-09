const axios = require('axios/index');
const express = require('express');
const router = express.Router();
const { getTemperatureData, transformBeerData }=require('../../../service/beerService')

/* the api wrap the result of 5 api call with different id  to a complete list*/
/* then transform the data and add new property 'isSafe' to beer object */
router.get('/', async (req, res) => {
  try {

    const rowData= await getTemperatureData();
    const newBeerData=transformBeerData(rowData);
    res.json(newBeerData);

  } catch (err) {
    console.error(err.message);
    res.status(500)
      .send('Server Error');
  }
});

module.exports = router;
