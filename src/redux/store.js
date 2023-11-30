import { createStore } from "redux";
import rootRedusers from "./reduser";

const store = createStore(rootRedusers);
export default store