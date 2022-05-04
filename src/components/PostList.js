import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div className="ui relaxed divided list">
				{this.renderList()}
			</div>
		)
	}
}

const mapStateToProps = (state) =>  {
	// console.log(state);
	return { posts: state.posts };
}

export default connect(mapStateToProps, {
	fetchPosts: fetchPosts
})(PostList);