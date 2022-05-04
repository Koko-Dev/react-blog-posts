import jsonPlaceholder from '../apis/jsonPlaceholder';

/*

 // Note: With redux-thunk, we can return a function
      instead of an object
 export const fetchPosts = () => {
	 return async function (dispatch, getState) {
			 const response = await jsonPlaceholder.get('/posts');
			 dispatch({type: 'FETCH_POSTS', payload: response})
   }
 };
*/

// Note: Action creator returns an action with the
//  fetched data on the payload property
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts')
	dispatch({type: 'FETCH_POSTS', payload: response})
}


