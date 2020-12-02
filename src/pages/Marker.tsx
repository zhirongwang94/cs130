
import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;

  // reference: https://levelup.gitconnected.com/reactjs-google-maps-with-custom-marker-ece0c7d184c4