import { FETCH_USER, CREATE_ACCOUNT } from "../utils/types";

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
        case CREATE_ACCOUNT:
            let index = state.accounts.length;
            return {
                ...state,
                accounts: [
                    ...state.accounts,
                    {
                        id: index,
                        name: action.name,
                        accountType: action.accountType,
                        notes: action.notes,
                        amount: parseInt(action.amount, 10),
                        createdAt: Date.now()
                    }
                ]
            };
        default:
            return state;
    }
}
