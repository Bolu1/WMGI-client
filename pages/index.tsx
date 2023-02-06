/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

import { useRouter } from "next/router";
import { Label } from "@headlessui/react/dist/components/label/label";

const Home: NextPage = () => {

  const [labels, setLabels] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
    
    fetch()
  }, [])

  const fetch = async() =>{

    const {data} = await axios.get(`http://localhost:8000/api/response/response`)
    getLabels(data.data)
  }

  const getLabels = (values) =>{
    var labels = []
    var datasets = []
    for(var i = 0; i < values.length; i++){
      console.log(values[i])
      labels.push(values[i].category)
      datasets.push(values[i].count)
    }
    console.log(labels)
    setLabels(labels)
    setCount(datasets)
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: count,
        backgroundColor: ['aqua', 'blue', 'purple', 'green', 'grey', 'yellow', 'red', 'indigo']
      }
    ]
  }

  const options = {

  }
  

  const router = useRouter()

  return (
    <div className="min-h-screen bg-black p-6">

      {/* button */}
      <div className="flex justify-end">
      <a 
      onClick={()=>{router.push('/login')}}
       className="relative inline-flex items-center  cursor-pointer  justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
<span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

<span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

<span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

<span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

<span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
<span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
<span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
<span className="relative">Respond</span>
</a>
      </div>


      <div
      className="flex justify-center items-center w-[100%]"
      >
      <div
      style={
        {
        padding: '20px',
        }
      }
      className="flex justify-center items-center lg:w-[50%] w-[100%]"
      >
        <Pie
        data = {data}
        options = {options}
        >

          </Pie>
      </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
