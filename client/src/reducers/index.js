import { combineReducers } from "redux";

import country from "./country-reducer";
import category from './category-reducer';
import product from './product-reducer';
import cart from './cart-reducer';

export default combineReducers({ country, category, product, cart });
