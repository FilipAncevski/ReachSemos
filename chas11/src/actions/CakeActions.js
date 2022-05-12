import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstats";

export const buyCake = (numOfCakes) => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes,
  };
};

export const restokeCakes = () => {
  return {
    type: RESTOCK_CAKES,
    payload: 10,
  };
};
