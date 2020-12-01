
// reference: https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4

import React from 'react';
import './Marker.css';

const SimpleMarker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div className="simplemarker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default SimpleMarker;