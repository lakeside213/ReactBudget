import {
    FETCH_USER,
    CREATE_ACCOUNT,
    SET_BASE_CURRENCY,
    DELETE_ACCOUNT
} from "../utils/types";

const INITIAL_STATE = {
    baseCurrency: {
        name: "",
        symbol: ""
    },
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
        case SET_BASE_CURRENCY: {
            return {
                ...state,
                baseCurrency: { name: action.name, symbol: action.symbol }
            };
        }
        case CREATE_ACCOUNT: {
            let index = state.accounts.length + 1;
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
                        cumulativeInflow: 0,
                        cumulativeOutflow: 0,
                        createdAt: Date.now()
                    }
                ]
            };
        }
        case DELETE_ACCOUNT: {
            const accountsCopy = [...state.accounts];
            const indexTodelete = accountsCopy.findIndex(function(account) {
                return account.id === action.id;
            });
            return {
                ...state,
                accounts: [
                    ...accountsCopy.slice(0, indexTodelete),
                    ...accountsCopy.slice(indexTodelete + 1)
                ]
            };
        }

        default:
            return state;
    }
}
