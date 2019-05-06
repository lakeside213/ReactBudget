import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/AccountBalanceWallet";
import { openDialog } from "../../../actions/dialog";
const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "3%"
    },
    icon: {
        fontSize: "100px"
    }
});

class EmptyState extends Component {
    render() {
        const { classes, openDialog } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <AddIcon className={classes.icon} />
                    <Typography variant="h4" gutterBottom>
                        Log a transaction
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        click on the button to log a transaction
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            openDialog("isLogTransModalOpen");
                        }}
                    >
                        Log transaction
                    </Button>
                </div>
            </Fragment>
        );
    }
}
export default connect(
    null,
    { openDialog }
)(withStyles(styles)(EmptyState));
