import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Monitor.module.scss';
import { fetchData, setAlert } from '../store/ActionCreators/actions';


const Monitor = () => {
  const dispatch = useDispatch();
  const beerData = useSelector((state) => state.beerData);
  const isLoading = useSelector((state) => state.isLoading);

  const setMonitor = async () => {
    await dispatch(fetchData('http://localhost:5000/api/monitor/'));
    dispatch(setAlert(beerData));
  };

  useEffect(() => {
    setMonitor()
  }, [dispatch]);


  return (isLoading === true ? <img src="../image/spinner.gif" alt="loading" />
      : <div>
        <div className="row">
          {beerData.map((beer) => (
            <div>
              <button
                key={beer.id}
                className={beer.isSafe ? styles.safe : styles.warning}
              >
                Current Temperature:
                {beer.currentTemp}
              </button>
            </div>
          ))}
        </div>
        </div>
  );
};

export default Monitor;
