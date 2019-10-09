import React from 'react';
import { useSelector } from 'react-redux';
import './Alert.scss';

const Alert = () => {
  const unSafeBeers = useSelector((state) => state.unSafeBeers);
  return (
    <div>
      <div className="row">
        <h1>Warning!</h1>
        {unSafeBeers.length > 0 && unSafeBeers.map((beer) =>
          <div key={beer.id}>
            <p className="alert">
              {`#${beer.id} ${beer.name} 's temperature is out of safe Range`}
            </p>
          </div>)}
      </div>
    </div>
  );
};

export default Alert;
