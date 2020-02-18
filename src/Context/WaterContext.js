import React from 'react';

const stats ={
    center: {
        latitude: -96,
        longitude: 41
    }
};
const WaterContext = React.createContext([stats.center, () => {}]);
export default WaterContext;
