import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = {
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        marginTop: "8%"
    }
};

class BottomNav extends React.Component {
    render() {
        const { classes, pages, setPage, value } = this.props;

        return (
            <BottomNavigation
                value={value}
                onChange={setPage}
                className={classes.root}
            >
                {pages.map((page, index) => (
                    <BottomNavigationAction
                        label={page.name}
                        value={page.name}
                        icon={page.icon}
                        key={index}
                    />
                ))}
            </BottomNavigation>
        );
    }
}

BottomNav.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNav);
