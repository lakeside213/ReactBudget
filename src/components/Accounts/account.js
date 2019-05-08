import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Amount, { GREEN, RED } from "../utils/amount";
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
    }
});

function SimpleList(props) {
    const { classes, name, data, handleOpenAccount } = props;
    let total = 0;
    data.forEach(function(account) {
        total = total + account.amount;
    });

    return (
        <div className={classes.root}>
            <List component="div" dense>
                <ListItem button>
                    <ListItemText
                        primary={<Typography variant="h6">{name}</Typography>}
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={<Amount value={total} color={GREEN} />}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                {data.map(account => (
                    <Fragment>
                        <ListItem
                            button
                            onClick={() => {
                                handleOpenAccount(account);
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Typography variant="subtitle1">
                                        {account.name}
                                    </Typography>
                                }
                            />
                            <ListItemSecondaryAction>
                                <ListItemText
                                    className={classes.transDetails}
                                    primary={<Amount value={account.amount} />}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>
        </div>
    );
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
