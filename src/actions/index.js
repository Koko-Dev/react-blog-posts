import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
	// Note: With redux-thunk, we can return
	//  a function instead of an object
	return async function (dispatch, getState) {
		const response = await jsonPlaceholder.get('/posts')
		dispatch({type: 'FETCH_POSTS', payload: response})
	}
};

