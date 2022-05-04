// Maintain a list of posts that we obtain from JSON API

export default (state = [], action) => {
	if (action.type === 'FETCH_POSTS') return action.payload;
	return state;
}