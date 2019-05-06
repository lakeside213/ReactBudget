import { FETCH_USER } from "../utils/types";

const INITIAL_STATE = {
    baseCurrency: "$",
    transactions: [],
    budgets: [],
    accounts: [],
    settings: {}
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_USER: {
            return { ...state };
        }

        default:
            return state;
    }
}
