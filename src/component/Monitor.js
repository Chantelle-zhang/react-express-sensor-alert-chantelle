import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Monitor.scss';
import { fetchData } from '../store/ActionCreators/actions';


const Monitor = () => {
  const dispatch = useDispatch();
  const beerData = useSelector((state) => state.beerData);
  const isLoading = useSelector((state) => state.isLoading);

  const setMonitor = async () => {
    await dispatch(fetchData('api/monitor'));
  };

  useEffect(() => {
    setMonitor();
  }, [dispatch]);


  return (isLoading === true ? <img src="../image/spinner.gif" alt="loading" />
      : <div>
          {beerData.map((beer) => (
            <div key={beer.id}>
              <button
                className={beer.isSafe ? styles.safe : styles.warning}
              >
                {`${beer.name}  `}
                Current Temperature:
                {` ${beer.currentTemp} `}
                Safe Range:
                {` ${beer.minStoreTemp}-${beer.maxStoreTemp}`}
              </button>
            </div>
          ))}
        </div>

  );
};

export default Monitor;
