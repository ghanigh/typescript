import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import * as ACTIONS from "../redux/reducers/sneaker"

// DATA
import Data from '../data.json'

function Home() {

 const dispatch = useDispatch();
 const store = useSelector(state => state )
 
 useEffect(() => {
    dispatch(ACTIONS.FETCH_START());
    dispatch(ACTIONS.FETCH_SUCCES(Data))
 }, [])


  return (
    <div>Home</div>
  )
}

export default Home
