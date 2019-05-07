import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

const styles = {};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    render() {
        const { children, isOpen, dialogToggle } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen
                    open={isOpen}
                    onClose={dialogToggle}
                    TransitionComponent={Transition}
                >
                    {children}
                </Dialog>
            </div>
        );
    }
}

FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
