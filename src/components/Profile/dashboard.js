import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import logo from "../../logo.svg";

const styles = theme => ({
    root: {
        width: "100%",
        flex: "0 0 100%",
        margin: "2%",
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.up("md")]: {
            flex: "0 0 70%",
            width: "70%"
        }
    },
    transDetails: {
        textAlign: "right"
    },
    cashIn: {
        color: "#58a05b"
    },
    cashOut: {
        color: "#e60000"
    }
});

function SimpleList(props) {
    const { classes, dialogToggle, history } = props;
    return (
        <div className={classes.root}>
            <List component="div" dense>
                <ListItem
                    button
                    onClick={e => {
                        history.push("/auth/signin");
                    }}
                >
                    <ListItemIcon>
                        <img src={logo} style={{ height: "50px" }} alt="logo" />
                    </ListItemIcon>

                    <ListItemText
                        primary={<Typography variant="h6">Sign in</Typography>}
                        secondary="After sign in,you can also sync your data across all devices"
                    />
                </ListItem>
                <Divider />
            </List>

            <List component="div" dense>
                <ListItem
                    button
                    onClick={() => {
                        dialogToggle();
                    }}
                >
                    <ListItemIcon>
                        <MoneyIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary={
                            <Typography variant="subtitle1">
                                Base currency
                            </Typography>
                        }
                        secondary="Dollar($)"
                    />
                </ListItem>
                {navigator.share ? (
                    <ListItem
                        button
                        onClick={() => {
                            navigator
                                .share({
                                    title: "ReactBudget",
                                    url:
                                        "https://lakeside213.github.io/ReactBudget/"
                                })
                                .then(() => {
                                    console.log("Thanks for sharing!");
                                })
                                .catch(err => {
                                    console.log(
                                        `Couldn't share because of`,
                                        err.message
                                    );
                                });
                        }}
                    >
                        <ListItemIcon>
                            <ShareIcon />
                        </ListItemIcon>

                        <ListItemText
                            primary={
                                <Typography variant="subtitle1">
                                    Share
                                </Typography>
                            }
                        />
                    </ListItem>
                ) : (
                    ""
                )}
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SimpleList));
