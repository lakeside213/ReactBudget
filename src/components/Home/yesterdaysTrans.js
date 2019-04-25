import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        width: "100%",

        margin: "2%",
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.up("md")]: {
            width: "70%"
        }
    },
    transDetails: {
        textAlign: "right"
    }
});

function SimpleList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List
                component="div"
                subheader={
                    <ListSubheader component="div">
                        Yesterdays Transactions
                    </ListSubheader>
                }
                dense
            >
                <ListItem button>
                    <ListItemText
                        primary={<Typography variant="h6">Food</Typography>}
                        secondary="expense"
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={<Typography variant="h6">-$88</Typography>}
                            secondary="9:00"
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={<Typography variant="h6">Food</Typography>}
                        secondary="expense"
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={<Typography variant="h6">-$88</Typography>}
                            secondary="9:00"
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText primary={"View all Transactions"} />
                </ListItem>
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
