import React, { Component, Fragment } from "react";
import Dashboard from "./dashboard";
import { withStyles } from "@material-ui/core/styles";
import FullScreenDialog from "../utils/Dialogs/FullscreenDialog";
import SelectCurrency from "./selectCurrency";
const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3%"

        // flexWrap: "wrap",
        // [theme.breakpoints.up("md")]: {
        //     justifyContent: "center"
        // }
    }
});

class Profile extends Component {
    state = {
        dialogOpen: false
    };
    dialogToggle = event => {
        this.setState(prevState => {
            return { dialogOpen: !prevState.dialogOpen };
        });
    };
    render() {
        const { dialogOpen } = this.state;
        const { classes, setPage } = this.props;
        return (
            <Fragment>
                <Dashboard setPage={setPage} dialogToggle={this.dialogToggle} />
                <FullScreenDialog
                    open={dialogOpen}
                    dialogToggle={this.dialogToggle}
                >
                    <SelectCurrency
                        setPage={setPage}
                        dialogToggle={this.dialogToggle}
                    />
                </FullScreenDialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Profile);
