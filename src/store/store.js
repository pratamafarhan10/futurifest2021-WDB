import { createStore } from "vuex";
import equalityDemand from "./modules/equalityDemand";
const store = createStore({
    modules: {
        equalityDemand
    }
});

export default store;