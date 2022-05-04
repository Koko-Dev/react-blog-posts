// Maintain a list of posts that we obtain from JSON API

export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS': return action.payload;
		default: return state;
	}
}


