import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
    green: {
        color: "#58a05b"
    },
    red: {
        color: "#e60000"
    }
});
export const GREEN = "GREEN";
export const RED = "RED";
function renderAmount(value, classes, color) {
    switch (color) {
        case GREEN:
            return (
                <Typography variant="h6" className={classes.green}>
                    {value}
                </Typography>
            );
        case RED:
            return (
                <Typography variant="h6" className={classes.red}>
                    {value}
                </Typography>
            );

        default:
            return <Typography variant="h6">{value}</Typography>;
    }
}
function Amount(props) {
    const { classes, value, baseCurrency, color } = props;
    return (
        <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={baseCurrency}
            renderText={value => renderAmount(value, classes, color)}
        />
    );
}

Amount.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Amount);
