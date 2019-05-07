import { FETCH_USER, CREATE_ACCOUNT } from "../utils/types";
import { closeDialog } from "./dialog";
export const fetchUser = () => ({
    type: FETCH_USER
});

export const createAccount = (name, accountType, notes, amount) => {
    return async function(dispatch) {
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
