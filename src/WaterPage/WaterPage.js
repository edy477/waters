import React, {useState, useEffect, useContext} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button } from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import DataContext from "../Context/DataContext";
import {StatsContextProvider} from "../Context/StatsContextProvider";

import DataWater from './DataWater';
import CardGraph from "./CardGraph";
const WaterPage = ()=> {


    const stat ={

        daily:[],
        hourly: []

    };
    const stats ={
        center: {
            latitude: -96,
            longitude: 41
        }
    };

 const dataContext = useState(stat);
    const statsContext =useState(stats);
    const states = useState("California");

    return(
        <DataContext.Provider value={dataContext}>
        <StateContext.Provider value={states}>
        <WaterContext.Provider value={statsContext}>
<StatsContextProvider>





            <div className="container">

<div className="sidebar">

    <DataWater/>

</div>
       <div className="mapstate">
           <Layout/>
       </div>



<div className="cardgraphs">
    <CardGraph/>
</div>


            </div>



</StatsContextProvider>
        </WaterContext.Provider>
        </StateContext.Provider>
        </DataContext.Provider>

  );



};
export default WaterPage;
