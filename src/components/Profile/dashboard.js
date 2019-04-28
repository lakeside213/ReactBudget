import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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
    const { classes, setPage, dialogToggle } = props;
    return (
        <div className={classes.root}>
            <List component="div" dense>
                <ListItem
                    button
                    onClick={e => {
                        setPage(e, "Auth");
                    }}
                >
                    <ListItemIcon>
                        <img src={logo} style={{ height: "50px" }} />
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
                    <ListItemText
                        primary={
                            <Typography variant="subtitle1">
                                Base currency
                            </Typography>
                        }
                        secondary="Dollar($)"
                    />
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
