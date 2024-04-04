import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTION from '../redux/reducers/sneaker.js'
import Data from '../data.json'

function Home() {
  const dispatch = useDispatch()
  const store = useSelector(state => state.sneakers.data)

  useEffect(() => {
    dispatch(ACTION.FETCH_START())
    const fetchSneakers = async () => {
      try {
        // requete vers API
        dispatch(ACTION.FETCH_SUCCESS(Data))
      } catch (e) {
        console.log(e)
      }
    }
    fetchSneakers()
  }, [])

  return (
    <div>
      {store.map((element:any, index: number) => (
        <div key={index} className="card">
          <img src={element.picture[0].pic1} alt={element.name} width={200} height={170} />
          <p>{element.name} - {element.price}$</p>
        </div>
      ))}
    </div>
  )
}

export default Home