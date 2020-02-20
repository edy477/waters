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

    /*
        useEffect(() => {
            const fetchData = async () => {
                const result = await axios(
                    'https://cors-anywhere.herokuapp.com/http://battuta.medunes.net/api/city/us/search/?region=arizona&key=cd240d0ae4c7634badc680f35d0bd5fb',
                );
                const renameKeys = (keysMap, obj) =>
                    Object.keys(obj).reduce(
                        (acc, key) => ({
                            ...acc,
                            ...{ [keysMap[key] || key]: obj[key] }
                        }),
                        {}
                    );


                const rs =result.data;
                setData(rs);
                console.log(rs["0"].city);




            /*   const mapped = lodash.mapKeys(objectArray, function(value, re) {
                     return 'hits' + value;
                });

              console.log(mapped);*/





    /*    useEffect(() => {
            const sets = JSON.stringify({data}, "articles", 2);
            console.log(typeof(sets));

const mk=JSON.parse(sets);

            console.log(sets);
            console.log(mk);*/
        //    const std =JSON.parse(sets);
           /* const dog = JSON.parse(sets, (key, value) => {
                if(typeof key === '0') {
                    return "hits"
                }
                return value;
            });
            console.log(dog);*/
   // console.log(std);



 /*  dataset.forEach((item) => {
       console.log(item.city);
       console.log(item.latitude);

    });
*/

/*
    for  (const item of data) {
        console.log(item);
    }*/

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
