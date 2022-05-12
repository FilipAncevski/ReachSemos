import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restokeCakes } from "../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const message = useSelector((state) => state.CakeReducer.message);

  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {message && <p>{message}</p>}
      <button disabled={cakes < 1} onClick={() => dispatch(buyCake(1))}>
        Buy Cake
      </button>
      <button disabled={cakes < 2} onClick={() => dispatch(buyCake(2))}>
        Buy 2 Cake
      </button>
      <button disabled={cakes < 3} onClick={() => dispatch(buyCake(3))}>
        Buy 3 Cake
      </button>
      <button onClick={() => dispatch(restokeCakes())}>Restock</button>
    </div>
  );
};
