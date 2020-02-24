
import React, { useState, createContext } from 'react';
const StatsContext = React.createContext([{}, () => {}]);

const StatsContextProvider = (props) => {
    const [state, setState] = useState({daily:[],hourly:[]
    });
    return (
        <StatsContext.Provider value={[state, setState]}>
            {props.children}
        </StatsContext.Provider>
    );
}

export { StatsContext, StatsContextProvider };

