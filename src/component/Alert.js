import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const unSafeBeers = useSelector((state) => state.unSafeBeers);
  return (
    <div>
      <div className="row">
        {unSafeBeers.length > 0 && unSafeBeers.map((beer) =>
          <div>
            <p>
              {`${beer.name} 's temperature is out of safe Range`}
            </p>
          </div>)}
      </div>
    </div>
  );
};

export default Alert;
