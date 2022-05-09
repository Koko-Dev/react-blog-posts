import React from 'react';
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return <div className="header">{user.name}</div>;
	}
}

// Todo: Wire this up to Redux State which will then
//  give UserHeader class component access to this.state.users
// Note: ownProps argument gives us access to props going
//  into UserHeader Component
const mapStateToProps = (state, ownProps) => {
	// finds the appropriate user
	return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(
	mapStateToProps,
	{fetchUser}
)(UserHeader);