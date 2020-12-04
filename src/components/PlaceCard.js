import React from 'react';
//import { Rate, Divider } from 'antd';

// TODO: info is bad naming.
const PlaceCard = (({ info, key }) => {
  const { address, distanceText, name, openNow, photoUrl, priceLevel, rating, timeText } = info;
  return (
    
    <div key={key} className="col-3 w-100 mx-4 my-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span className="d-block mb-1">{address}</span>
          <span className="d-block">{distanceText}</span>
          <span className="d-block">{timeText}</span>
        </div>
        <ul className="list-group list-group-flush">
        </ul>
      </div>
    </div>
  );
});

export default PlaceCard;