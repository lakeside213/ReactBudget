import { OPEN_DIALOG, CLOSE_DIALOG } from "../utils/types";

export const openDialog = name => ({
    type: OPEN_DIALOG,
    name
});

export const closeDialog = name => ({
    type: CLOSE_DIALOG,
    name
});
