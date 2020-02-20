import React,{useState,useEffect,useContext,useRef} from "react";
import useAxios from 'axios-hooks';
import lodash from 'lodash';
import axios from 'axios';
import { Button,Card ,Media,Heading,Title} from 'react-bulma-components';
import { Layout } from "../MapPage";
import WaterContext from "../Context/WaterContext";
import StateContext from "../Context/StateContext";
import DataContext from "../Context/DataContext";
import {StatsContext} from "../Context/StatsContextProvider";
import moment from "moment";
import * as d3 from 'd3';

const CardGraph = ({data})=>{


    const canvas = useRef(null);
    const [state, setState] = useContext(StatsContext);
    const [daily,setDaily]= useState(state.daily);
    const dailys =state.daily;


    console.log(dailys);
    useEffect(() => {
   //     const temphigh = state.daily.data.map(items => items.temperatureHigh);
      //  console.log(temphigh);
        const svg = d3.select(canvas.current).style("border", "1px solid black");/*.selectAll("h2")
            .data()
            .enter()
            .append("h2")
            .text("New Temperature");
*/
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
        let data  = ( testo(state.daily.data) === undefined) ? "empty" : state.daily.data;

        //state.daily.map(item => console.log(item.daily));
    },[state]);

    console.log(daily);


   console.dir(state.daily);
    return(

        <div className="cardgraphs">
            <svg
                className="d3-component"
                width={400}
                height={200}
                ref={canvas}
            />
        </div>
    )

};

export  default CardGraph;
