import React,{useState,useEffect,useContext,useRef} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button,Card ,Media,Heading,Title,Table} from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import DataContext from "../Context/DataContext";
import {StatsContext} from "../Context/StatsContextProvider";
import Chart from "chart.js";
import moment from "moment";
import * as d3 from 'd3';
import WeatherIcon from 'react-icons-weather';

const CardGraph = ({data})=>{

    function testo(t) {      //defining a function
        if (t === undefined) {       //if t=undefined, call tt
            console.log(t)      //call t
        }
        return t;
    }
    const canvas = useRef(null);
    const chartjs = useRef(null);
    const charts = useRef(null);
    const [state, setState] = useContext(StatsContext);
    const [daily,setDaily]= useState(state.daily);
    const dailys =state.daily;

const  unixtime = moment.unix(1582258260);
const dayname= unixtime.format('MM DD YY');
//console.log(moment(dayname).format('dddd'));
    let fail  = ( testo(state.daily.data) === undefined) ? "empty" : state.daily.data;
    let times=[];
    let summary=[];
    let temperatureMax=[];
    let iconnames=[];

    Object.values(fail).map(item => times.push(item.time));
    Object.values(fail).map(item => summary.push(item.summary));
    Object.values(fail).map(item => temperatureMax.push(item.temperatureMax));
    Object.values(fail).map(item => iconnames.push(item.icon));
console.log(iconnames);

    let daynames= times.map(item => moment.unix(item).format('dddd'));
    let datenames = times.map(item => moment.unix(item).format('MM/DD'));

   // console.log(dailys);
    useEffect(() => {
        const mychart = new Chart(charts, {
            type: 'bar'
        });



   //     const temphigh = state.daily.data.map(items => items.temperatureHigh);
      //  console.log(temphigh);



       // setDaily(state.daily);

       // const tempsdaily= stats.map()

      //  console.dir(state.daily.data["0"]);
      // state.daily.data.map(item => console.log(item.temperatureHigh));

    //    console.dir(stats["0"].daily);
        console.dir(state.daily.data);
        let ts = [];
        ts=  state.daily.data;
    //  console.log(ts);
        function testo(t) {      //defining a function
            if (t === undefined) {       //if t=undefined, call tt
                console.log(t)      //call t
            }
            return t;
        }
        let fail  = ( testo(state.daily.data) === undefined) ? "empty" : state.daily.data;
   //console.log(fail["1"].time);
   //console.log(Object.keys(fail));
        //console.log(Object.values(fail));
        const temperaturehigh=[];
        Object.values(fail).map(item => temperaturehigh.push(item.temperatureHigh));
        console.log(temperaturehigh);

     //   const dats = data.map(item => item.temperatureHigh);

        const svg = d3.select(canvas.current).style("border", "1px solid black");


        /*.enter()
        .append("h2")
        .text((datapoint) => `${datapoint} degrees`)
        .style((datapoint) => {
            if (datapoint > 10) {
                return "red"
            } else { return "blue" }
        });*/
        //   fail.map(item => console.log(item.time));
       // console.log(dats);


        //state.daily.map(item => console.log(item.daily));
    },[state]);

    //console.log(daily);
console.dir(typeof (iconnames[0]));

  // console.dir(state.daily);
    return(

        <div className="cardgraphsi">
           <canvas ref={charts}></canvas>
            <WeatherIcon name="darksky" iconId="snow" flip="horizontal" rotate="90" />
<Table>
<thead>
{daynames.map(item => <th>{item}</th>)}
</thead>
    <tbody>
    <tr>
        {datenames.map(item => <th>{item}</th>)}
    </tr>
    <tr>
        {summary.map(item => <th>{item}</th>)}
    </tr>
    <tr>

    </tr>
    <tr>
        {temperatureMax.map(item => <th>{item} &#176;C</th>)}
    </tr>

    </tbody>
</Table>

        </div>
    )

};

export  default CardGraph;
