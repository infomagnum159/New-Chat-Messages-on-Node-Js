import {FETCH_POST_SUCCESS} from "../actions/postAction";


const initialState = {
    posts: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_POST_SUCCESS:
            return {...state, posts: action.posts};
        default:
            return state;
    }
};

export default productsReducer;