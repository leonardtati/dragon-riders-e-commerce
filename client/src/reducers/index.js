import { combineReducers } from "redux";

import country from "./country-reducer";
import category from './category-reducer';
export default combineReducers({ country, category });
