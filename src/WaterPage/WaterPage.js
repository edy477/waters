import React,{useState,useEffect} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button } from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";

import DataWater from './DataWater';
const WaterPage = ()=> {

    const stats ={
        center: {
            latitude: -96,
            longitude: 41
        }
    };

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
        <StateContext.Provider value={states}>
        <WaterContext.Provider value={statsContext}>
   <div>




<Layout/>

<DataWater/>

   </div>



        </WaterContext.Provider>
        </StateContext.Provider>
  );



};
export default WaterPage;
