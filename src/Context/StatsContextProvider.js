
import React, { useState, createContext } from 'react';
const StatsContext = React.createContext([{}, () => {}]);

const StatsContextProvider = (props) => {
    const [state, setState] = useState({daily:[],hourly:[],city:"Los Angeles"
    });
    return (
        <StatsContext.Provider value={[state, setState]}>
            {props.children}
        </StatsContext.Provider>
    );
}

export { StatsContext, StatsContextProvider };

/*
export const StatsContext = createContext();

const StatsContextProvider = (props) => {
    const initial ={
        daily:[],
        hourly:[]
    };
    const [stats, setStats] = useState(initial);

    return (
        <StatsContext.Provider value={{stats, setStats}}>
            {props.children}
        </StatsContext.Provider>
    )
}

export default StatsContextProvider;
*/
