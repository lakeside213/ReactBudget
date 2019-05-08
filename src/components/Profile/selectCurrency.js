import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeDialog } from "../../actions/dialog";
import { setBaseCurrency } from "../../actions/user";
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
import SearchIcon from "@material-ui/icons/Search";
import LoadingScreen from "../utils/loading";
import { fade } from "@material-ui/core/styles/colorManipulator";
import InputBase from "@material-ui/core/InputBase";
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
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
});

class SimpleList extends Component {
    state = {
        filter: "",
        countriesData: [],
        isLoading: true,
        isSearchOpen: false
    };
    async componentDidMount() {
        try {
            let countries;
            const res = await fetch(
                "https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag"
            );

            countries = await res.json();
            this.setState({ countriesData: countries, isLoading: false });
        } catch (e) {
            console.log(e);
        }
    }

    toggleSearch = event => {
        this.setState(prevState => {
            return { isSearchOpen: !prevState.isSearchOpen };
        });
    };
    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, countriesData, isSearchOpen, isLoading } = this.state;
        const {
            classes,
            setBaseCurrency,
            closeDialog,
            baseCurrency
        } = this.props;

        const lowercasedFilter = filter.toLowerCase();
        const filteredData = countriesData.filter(country => {
            return Object.keys(country).some(key =>
                country[key]
                    .toString()
                    .toLowerCase()
                    .includes(lowercasedFilter)
            );
        });

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        {isSearchOpen ? (
                            <Fragment>
                                <IconButton
                                    color="inherit"
                                    aria-label="Close"
                                    onClick={() => {
                                        this.toggleSearch();
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput
                                        }}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                {baseCurrency.name === "" &&
                                baseCurrency.symbol === "" ? (
                                    ""
                                ) : (
                                    <IconButton
                                        color="inherit"
                                        aria-label="Close"
                                        onClick={() => {
                                            closeDialog("isBaseCurrencyOpen");
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                )}
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    className={classes.flex}
                                >
                                    Pick your currency
                                </Typography>
                                <IconButton
                                    color="inherit"
                                    onClick={this.toggleSearch}
                                    aria-label="Close"
                                >
                                    <SearchIcon />
                                </IconButton>{" "}
                            </Fragment>
                        )}
                    </Toolbar>
                </AppBar>
                {isLoading ? (
                    <LoadingScreen />
                ) : (
                    <List component="div" dense>
                        {filteredData.map(country => (
                            <Fragment key={country.name}>
                                <ListItem
                                    button
                                    className={classes.listItem}
                                    onClick={e => {
                                        setBaseCurrency(
                                            country.currencies[0].code,
                                            country.currencies[0].symbol
                                        );
                                    }}
                                >
                                    <ListItemIcon>
                                        <img
                                            src={country.flag}
                                            className={classes.flag}
                                            alt={country.name}
                                        />
                                    </ListItemIcon>

                                    <ListItemText
                                        primary={
                                            <Typography variant="h6">
                                                {`${country.name}(${
                                                    country.currencies[0].name
                                                })`}
                                            </Typography>
                                        }
                                        secondary={`${
                                            country.currencies[0].code
                                        }(${country.currencies[0].symbol})`}
                                    />
                                </ListItem>
                                <Divider />
                            </Fragment>
                        ))}
                    </List>
                )}
            </div>
        );
    }
}

SimpleList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    null,
    { closeDialog, setBaseCurrency }
)(withStyles(styles)(SimpleList));
