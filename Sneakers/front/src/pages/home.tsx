import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import * as ACTIONS from "../redux/reducers/sneaker"

// DATA
import Data from '../data.json'

function Home() {

 const dispatch = useDispatch();
 console.log(Data);
 
 useEffect(() => {
    dispatch(ACTIONS.FETCH_START());
    dispatch(ACTIONS.FETCH.START(Data))
 }, [])


  return (
    <div>
      
    </div>
  )
}

export default Home
