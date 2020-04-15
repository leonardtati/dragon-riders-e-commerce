import { combineReducers } from "redux";

import country from "./country-reducer";
import category from './category-reducer';
import product from './product-reducer';
import feature from './feature-reducer';
import cart from './cart-reducer';
import categoryProduct from './category-product-reducer';

export default combineReducers({ country, category, product, feature, cart, categoryProduct });




const cart = cartReducer;

export default combineReducers({ country, category, product, feature, cart });
