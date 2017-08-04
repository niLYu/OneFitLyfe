import { combineReducers } from "redux";
import calCalc from '../routes/CalCalc/modules/calcalcReducer';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        calCalc,
    });
}
