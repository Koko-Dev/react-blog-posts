import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	console.log('about to fecth posts');
	await dispatch(fetchPosts());
	console.log('fetched posts!')

	console.log(	getState().posts);
}

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts')
	dispatch({type: 'FETCH_POSTS', payload: response.data})
}


// Todo: Create an action creator to fetch one user at a time
export const fetchUser = (id) => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({type: 'FETCH_USER', payload: response.data});
}


//  ==========  App only uses fetchPosts and fetchUsers =========
// export const fetchPosts = () => async dispatch => {
// 	const response = await jsonPlaceholder.get('/posts')
// 	dispatch({type: 'FETCH_POSTS', payload: response.data})
// }
//
//
// // Todo: Create an action creator to fetch one user at a time
// // Solution 1
// export const fetchUser = (id) => async dispatch => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({type: 'FETCH_USER', payload: response.data});
// }


// // Solution 2
// Use lodash to minimize requests = 23 requests
// export const fetchUser = _.memoize(function (id) {
// 	return _.memoize(async function (dispatch) {
// 		const response = await jsonPlaceholder.get(`/users/${id}`);
// 		dispatch({type: 'FETCH_USER', payload: response.data});
// 	})
// })

// // Solution 3
// Use lodash to minimize API requests == 23 requests
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({type: 'FETCH_USER', payload: response.data});
// })


