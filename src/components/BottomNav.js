import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Person from "@material-ui/icons/Person";
import Money from "@material-ui/icons/AttachMoney";
import Fab from "@material-ui/core/Fab";
import CreateTrans from "@material-ui/icons/AccountBalanceWallet";
const styles = theme => ({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        marginTop: "8%"
    },
    fab: {
        marginTop: "-1.25rem"
    },
    actionWidth: {
        [theme.breakpoints.down("xs")]: {
            minWidth: "49px"
        }
    }
});

class BottomNav extends React.Component {
    render() {
        const { classes, setPage, value, user } = this.props;
        const fabClassName = classNames(classes.fab, classes.actionWidth);
        return (
            <BottomNavigation
                value={value}
                onChange={setPage}
                className={classes.root}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    label="Home"
                    value="Home"
                    icon={<Home />}
                    className={classes.actionWidth}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/accounts"
                    label="Accounts"
                    value="Accounts"
                    icon={<AccountBalance />}
                    className={classes.actionWidth}
                />
                {user.accounts.length > 0 ? (
                    <BottomNavigationAction
                        className={fabClassName}
                        value="Add Transaction"
                        icon={
                            <Fab
                                color="primary"
                                aria-label="Add"
                                className={classes.fab}
                            >
                                <CreateTrans />
                            </Fab>
                        }
                    />
                ) : (
                    ""
                )}

                <BottomNavigationAction
                    component={Link}
                    to="/budget"
                    label="Budget"
                    value="Budget"
                    icon={<Money />}
                    className={classes.actionWidth}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/me"
                    label="Me"
                    value="Me"
                    icon={<Person />}
                    className={classes.actionWidth}
                />
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNav);
