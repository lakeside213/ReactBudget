import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="div" dense>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography variant="subtitle2">
                                How much have you saved?
                            </Typography>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">Yesterday</Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography
                                    variant="h6"
                                    className={classes.cashIn}
                                >
                                    $8888
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">This month</Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography
                                    variant="h6"
                                    className={classes.cashIn}
                                >
                                    $888
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">This year</Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography
                                    variant="h6"
                                    className={classes.cashOut}
                                >
                                    $-888
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
