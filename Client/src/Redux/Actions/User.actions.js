import axios from "axios";
import { userConstant } from "./Constant";

export const getUser = (id) => {
    return async dispatch => {
        dispatch({ type: userConstant.GET_USER_REQUEST });
        try {
            const response = await axios.get(`http://localhost:3000/webgenius/user/${id}/get`);
            if (response.status === 200) {
                dispatch({
                    type: userConstant.GET_USER_SUCCESS,
                    payload: { user: response.data }
                });
            } else {
                throw new Error('Failed to fetch users');
            }
        }
        catch (error) {
            dispatch({
                type: userConstant.GET_USER_FAILURE,
                payload: { error: error.message || 'An unknown error occurred' }
            });
        }
    };
};
export const addUser = (data) => {
    return async dispatch => {
        dispatch({ type: userConstant.ADD_USER_REQUEST });
        try {
            const response = await axios.post('http://localhost:3000/webgenius/user/add', data);
            if (response.status === 200) {
                dispatch({
                    type: userConstant.ADD_USER_SUCCESS,
                    payload: { createdUser: response.data }
                });
            } else {
                throw new Error('Failed to add user');
            }
        }
        catch (error) {
            dispatch({
                type: userConstant.GET_USER_FAILURE,
                payload: { error: error.message || 'An unknown error occurred' }
            });
        }
    }


}



