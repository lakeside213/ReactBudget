import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/ChevronLeft";
import DeleteIcon from "@material-ui/icons/Delete";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    },
    money: {
        fontSize: "3rem"
    },
    cashIn: {
        color: "#58a05b"
    },
    cashOut: {
        color: "#e60000"
    }
};

class FullScreenDialog extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            Edit Transaction
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="Close"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText
                            primary={
                                <InputBase
                                    className={classes.money}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            $
                                        </InputAdornment>
                                    }
                                    defaultValue="88"
                                />
                            }
                        />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List>
            </div>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
