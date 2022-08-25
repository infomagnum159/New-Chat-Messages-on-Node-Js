import axiosApi from "../../axiosApi";


export const CREATE_POST_SUCCESS = "CREATE_PRODUCTS_SUCCESS";
export const FETCH_POST_SUCCESS = "FETCH_PRODUCTS_SUCCESS";


const fetchProductsSuccess = posts => {
    return {type: FETCH_POST_SUCCESS, posts};
};

export const fetchPosts = () => {
    return dispatch => {
        return axiosApi.get("/posts").then(response => {
            dispatch(fetchProductsSuccess(response.data));
        });
    };
};

const createPostSuccess = () => {
    return {type: CREATE_POST_SUCCESS};
};

export const createPost = postData => {
    return dispatch => {
        return axiosApi.post("posts", postData).then(() => {
            dispatch(createPostSuccess());
        });
    };
};