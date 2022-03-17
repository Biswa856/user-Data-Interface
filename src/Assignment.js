import React,{useState,useEffect} from 'react'
import AssignHeader from './AssignHeader'

import Card from './Card'

export default function Assignment() {


  const[isLoaded,setIsloaded]= useState(false);
  const [data, setData] = useState([]);

  const[filterData,setFilterData] = useState([]);


  async function getApiData() {
      let apiData = await fetch("https://randomuser.me/api/?results=900")
      apiData = await apiData.json()
      console.log(apiData);
      setData(apiData.results)
      setFilterData(apiData.results)
      setIsloaded(true);
  }

  useEffect(() => {
    getApiData();
}, [])



  return (
    <>
    <AssignHeader data={data} setFilterData={setFilterData}/>
    <Card data={filterData} isLoaded={isLoaded}/>
    </>
  )
}
