import React from 'react';

const stats ={

        daily:[],
        hourly: []

};
const DataContext = React.createContext([stats, ()=> {}]);
export default DataContext;
