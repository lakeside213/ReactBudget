import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/ChevronLeft";
import countries from "../../utils/countries.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
const styles = theme => ({
    root: {
        width: "100%"
    },

    appBar: {
        position: "fixed"
    },
    flex: {
        flex: "1"
    },
    flag: { height: "50px", width: "65px" },
    listItem: {
        "&:nth-of-type(1)": {
            marginTop: "4.5%",
            [theme.breakpoints.down("xs")]: {
                marginTop: "14.5%"
            }
        }
    }
});

const Flag = ({ src }) => (
    <div>
        <LazyLoadImage alt={"l"} height={"50px"} src={src} width={"50px"} />
    </div>
);
class SimpleList extends Component {
    state = {
        countriesData: []
    };
    componentDidMount() {
        this.setState({ countriesData: countries });
    }

    render() {
        const { countriesData } = this.state;
        const { classes, setPage, dialogToggle } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Close"
                            onClick={() => {
                                dialogToggle();
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.flex}
                        >
                            Pick your currency
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List component="div" dense>
                    {countriesData.map(country => (
                        <Fragment key={country.name}>
                            <ListItem
                                button
                                className={classes.listItem}
                                onClick={e => {
                                    dialogToggle();
                                    setPage(e, "Me");
                                }}
                            >
                                <ListItemIcon>
                                    <Flag src={country.flag} />
                                </ListItemIcon>

                                <ListItemText
                                    primary={
                                        <Typography variant="h6">
                                            {`${country.name}(${
                                                country.currencies[0].name
                                            })`}
                                        </Typography>
                                    }
                                    secondary={`${country.currencies[0].code}(${
                                        country.currencies[0].symbol
                                    })`}
                                />
                            </ListItem>
                            <Divider />
                        </Fragment>
                    ))}
                </List>
            </div>
        );
    }
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
