import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

	// console.log(	getState().posts);

	// Array of all userIds, then get the unique ones only
	// OP:  (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	/*
	 console.log(userIds);
	 Todo: Iterate over the Array of ids and for every id
	  call action creator dispatch(fetchUser(id))
	 Note: We will not put an await before dispatch because
	  we will have no other logic after this which would
	  require we fetch anymore users
	 Important: the async/await syntax DOES NOT work
	  for forEach() statements and would have to adjust:  for example
	 Code:
	    await Promise.all(userIds.map(id => dispatch(fetchUser(id)))  etc...
	 */

	userIds.forEach(id => dispatch(fetchUser(id)));
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


