import React,{useState,useEffect,useContext,useMemo} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button,Card ,Media,Heading,Title} from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import DataContext from "../Context/DataContext";
import CardGraph from "./CardGraph";

import {StatsContext} from "../Context/StatsContextProvider";

const WaterCard = ({lat,long})=>{
    const [state, setState] = useContext(StatsContext);
    const [data,setData] =useState({forecast:[]});
    const [daily,setDaily] =useState({daily:[]});
    const [hourly,setHourly] =useState({hourly:[]});
    const [datas, setDatas] = useContext(DataContext);

    const [current,setCurrent] =useState({currently:[]});

    useEffect(() => {

        const str = lat.toString()+','+long.toString();

        const fetchData = async () => {
            const result = await axios(
                'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/83fbb50fcda904a33752ffc002463681/'+str,
            );
            setData({forecast:result.data});
            setCurrent({currently: result.data["currently"]});
            setDaily({daily:result.data["daily"]});
            setHourly({hourly:result.data["hourly"]})
    //    setDatas({daily:result.data["daily"],hourly:result.data["hourly"]});
            setState(state => ({ ...state, daily:result.data["daily"],hourly:result.data["hourly"]}));

        };
        fetchData();
    }, [lat]);

    return(




        <div className="another">
            <Card>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={5}>Today</Heading>




                            <Heading size={2}>{current.currently.temperature} &#176;C</Heading>
                            <p>Feels like:   {current.currently.apparentTemperature} &#176;C</p>

                            <label>Humidity: 	{current.currently.humidity*100} %</label>
<br/>
                            <label>Dew Pt:      {current.currently.dewPoint}</label>
<br/>
                            <label>
Pressure:   {current.currently.pressure}
                            </label>
                        </Media.Item>
                    </Media>


                </Card.Content>

            </Card>


        </div>





    );
};
export default  WaterCard;
