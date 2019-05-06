import { OPEN_DIALOG, CLOSE_DIALOG } from "../utils/types";

const INITIAL_STATE = { isAccountModalOpen: false, isLogTransModalOpen: false };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case OPEN_DIALOG:
            console.log(action);
            return { ...state, [action.name]: true };
        case CLOSE_DIALOG:
            return { ...state, [action.name]: false };
        default:
            return state;
    }
}
