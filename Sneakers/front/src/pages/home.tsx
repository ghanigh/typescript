import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Action //
import * as ACTION from "../redux/reducers/sneaker.js";

// Interface & Type //
import { Sneaker, RootState } from "../interfaces/sneakers.ts";

// Service //
import { allSneakers } from "../selector/sneaker.selector.ts";

// Data //
import Data from "../data.json";

function Home() {
  const dispatch = useDispatch();
  const store: Sneaker[] = useSelector(
    (state: RootState) => state.sneakers.data
  );

  useEffect(() => {
    dispatch(ACTION.FETCH_START());
    const fetchSneakers = async () => {
      try {
        // const data = await axios.get(URL DE L'API) //
        dispatch(ACTION.FETCH_SUCCESS(Data));
      } catch (e) {
        console.log(e);
      }
    };
    fetchSneakers();
  }, []);

  return (
    <div>
      {store.map((element: any, index: number) => (
        <div key={index} className="card">
          <img
            src={element.picture[0].pic1}
            alt={element.name}
            width={200}
            height={170}
          />
          <p>
            {element.name} - {element.price}$
          </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
