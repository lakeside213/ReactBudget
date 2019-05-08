import { FETCH_USER, CREATE_ACCOUNT, SET_BASE_CURRENCY } from "../utils/types";
import { closeDialog } from "./dialog";
export const fetchUser = () => ({
    type: FETCH_USER
});

export const createAccount = (name, accountType, notes, amount) => {
    return function(dispatch) {
        dispatch({
            type: CREATE_ACCOUNT,
            name,
            accountType,
            notes,
            amount
        });
        dispatch(closeDialog("isAccountModalOpen"));
    };
};

export const setBaseCurrency = (name, symbol) => {
    return function(dispatch) {
        dispatch(closeDialog("isBaseCurrencyOpen"));
        dispatch({
            type: SET_BASE_CURRENCY,
            name,
            symbol
        });
    };
};
