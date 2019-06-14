// import React from "react";
// // import PlaceTwoTone from "@material-ui/icons/PlaceTwoTone";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default ({ size, color, onClick }) => (
//     // <PlaceTwoTone onClick={onClick} style={{ fontSize: size, color: color }} />
//     <FontAwesomeIcon icon="map-marker-alt" onClick={onClick} style={{ fontSize: size, color: color, cursor: 'pointer' }} />
// );


import React, {PureComponent} from 'react';

// const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
//   c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
//   C20.1,15.8,20.2,15.8,20.2,15.7z`;

// const pinStyle = {
//   cursor: 'pointer',
//   stroke: 'none'
// };

export default class PinIcon extends PureComponent {
  render() {
    const {size = 20, onClick, color} = this.props;

    return (
        <>
        <svg width={size} height={size} viewBox="-16 -18 64 64" onClick={onClick}>
            <path fill="rgba(0,0,0,.2)" stroke="none"
            transform="translate(-2,48) scale(1,0.5) rotate(40) translate(0,-46)"
            d="M0,47 Q0,28 10,15 A15,15 0,1,0 -10,15 Q0,28 0,47"/>
            <path fill={color} stroke="black" strokeWidth="1"
            d="M0,47 Q0,28 10,15 A15,15 0,1,0 -10,15 Q0,28 0,47"/>
            <circle cx="0" cy="4" r="4" fill="black" stroke="none"/>
        </svg>


        {/* 
        // a fatter shorter icon
        <svg
            height={size}
            viewBox="0 0 24 24"
            style={{
            ...pinStyle,
            fill: color,
            transform: `translate(${-size / 2}px,${-size}px)`
            }}
            onClick={onClick}
        >
            <path d={ICON} />
        </svg> */}
    </>
    );
  }
}