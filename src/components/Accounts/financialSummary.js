import React from "react";
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
    const { classes, assets } = props;
    return (
        <div className={classes.root}>
            <List component="div" dense>
                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">Net assets</Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography variant="h6">
                                    <Amount value={assets} baseCurrency={"$"} />
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={<Typography variant="h6">Assets</Typography>}
                    />
                    <ListItemSecondaryAction>
                        <ListItemText
                            className={classes.transDetails}
                            primary={
                                <Typography variant="h6">
                                    <Amount
                                        value={assets}
                                        baseCurrency={"$"}
                                        color={GREEN}
                                    />
                                </Typography>
                            }
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText
                        primary={
                            <Typography variant="h6">Liablties</Typography>
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
                                    $888
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
