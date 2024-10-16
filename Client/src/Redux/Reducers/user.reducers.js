/* eslint-disable no-duplicate-case */
import { userConstant } from "../Actions/Constant";

const initialState = {
    user: {},
    createdUser: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.ADD_USER_SUCCESS:
            return {
                ...state,
            };
        case userConstant.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
            };
        case userConstant.Get_USER_FAILURE:
            return {
                ...state,
            };
        case userConstant.ADD_USER_REQUEST:
            return {
                ...state,
            };
        case userConstant.ADD_USER_SUCCESS:
            return {
                ...state,
                createdUser: action.payload.createdUser,
            };
        case userConstant.ADD_USER_FAILURE:
            return {
                ...state,
            };
        default:
            return state;  // Add this default case
    }
};

export default userReducer;