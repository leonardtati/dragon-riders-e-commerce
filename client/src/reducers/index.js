import { combineReducers } from "redux";

import country from "./country-reducer";
import category from './category-reducer';
import product from './product-reducer'
import feature from './feature-reducer'

export default combineReducers({ country, category, product, feature });
