import React from 'react';
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}
	render() {
		const user = this.props.users.find(user => user.id === this.props.userId);
		if (!user) {
			return null;
		}
		return <div className="header">{user.name}</div>;
	}
}

// Todo: Wire this up to Redux State which will then
//  give UserHeader class component access to this.state.users
const mapStateToProps = (state) => {
	// console.log(state.users);
	return {users: state.users};
}

export default connect(
	mapStateToProps,
	{fetchUser}
)(UserHeader);