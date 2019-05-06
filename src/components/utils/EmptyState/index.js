import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../actions/user";
import CreateAccount from "./createAccount";
import LogTrans from "./logTrans";
export default ChildComponent => {
    class ComposedComponent extends Component {
        // Our component just got rendered
        componentDidMount() {
            this.props.fetchUser();
        }

        render() {
            const { user } = this.props;
            const { transactions, accounts } = user;
            if (accounts.length === 0) {
                return <CreateAccount />;
            } else if (transactions.length === 0) {
                return <LogTrans />;
            }
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps({ user }) {
        return { user };
    }

    return connect(
        mapStateToProps,
        { fetchUser }
    )(ComposedComponent);
};
