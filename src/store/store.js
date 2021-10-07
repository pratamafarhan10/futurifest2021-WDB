import { createStore } from "vuex";
import equalityDemand from "./modules/equalityDemand";
import jobs from "./modules/jobs";

const store = createStore({
    modules: {
        equalityDemand,
        jobs
    }
});

export default store;