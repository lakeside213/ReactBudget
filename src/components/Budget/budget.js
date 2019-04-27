import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Add from "@material-ui/icons/Add";

import red from "@material-ui/core/colors/red";

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
    alignItems: {
        display: "flex",
        alignItems: "center",
        marginLeft: "-0.3rem"
    },
    transDetails: {
        textAlign: "right"
    },
    cashIn: {
        color: "#58a05b"
    },
    cashOut: {
        color: "#e60000"
    },
    linearProg: {
        height: "14px",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        marginLeft: "0.2rem",
        marginTop: "0.5rem"
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
                            <Typography
                                variant="subtitle2"
                                className={classes.alignItems}
                            >
                                <ChevronLeft />
                                Apr 2019
                                <ChevronRight />
                            </Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography variant="h6">
                                    <Add />
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">Total Budget</Typography>
                        }
                        secondary={
                            <LinearProgress
                                variant="determinate"
                                value={90}
                                className={classes.linearProg}
                            />
                        }
                    />
                    <ListItemSecondaryAction style={{ top: "35%" }}>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Fragment>
                                    <Typography
                                        variant="h6"
                                        className={classes.cashIn}
                                    >
                                        $8888 left
                                    </Typography>
                                </Fragment>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
