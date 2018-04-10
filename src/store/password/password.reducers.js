import {
    CREATE_PASSWORD_SUCCESS,
    GET_PASSWORD_SUCCESS,
    EDIT_PASSWORD_SUCCESS,
    DELETE_PASSWORD_SUCCESS,
    SEARCH_PASSWORD,
    EDIT_MODAL_OPEN,
    EDIT_MODAL_CLOSE,
    LOADING,
    ERROR
} from './password.actionTypes';

const initialState = {
    loading: false,
    error: false,
    data: [],
    showEditModal: false,
    key: '',
    url: '',
    username: '',
    password: '',
    searchPassword: ''
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case GET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        case EDIT_PASSWORD_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: false
            }
        case DELETE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case SEARCH_PASSWORD:
            return {
                ...state,
                searchPassword: action.payload
            }
        case EDIT_MODAL_OPEN:
            return {
                ...state,
                showEditModal: true,
                key: action.payload.key,
                url: action.payload.url,
                username: action.payload.username,
                password: action.payload.password
            }
        case EDIT_MODAL_CLOSE:
            return {
                ...state,
                showEditModal: false,
                key: '',
                url: '',
                username: '',
                password: ''
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducers;