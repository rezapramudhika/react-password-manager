import {
    CREATE_PASSWORD_SUCCESS,
    EDIT_PASSWORD_SUCCESS,
    GET_PASSWORD_SUCCESS,
    DELETE_PASSWORD_SUCCESS,
    EDIT_MODAL_OPEN,
    EDIT_MODAL_CLOSE,
    LOADING,
    ERROR
} from './password.actionTypes';
import firebase from 'firebase';
import swal from 'sweetalert';

export const createPassword = (payload) => {
    return dispatch => {
        dispatch(loading());
        firebase.database().ref('password-manager/').push(payload)
            .then(() => dispatch(swalCreatePswSuccess()))
            .catch(() => dispatch(error()))
    }
}

export const getPasswords = () => {
    return dispatch => {
        dispatch(loading());
        let password = firebase.database().ref('password-manager/');
        password.on('value', function (snapshot) {
            dispatch(getPasswordsSuccess(snapshotToArray(snapshot)));
        });
    }
}

export const editPassword = (payload) => {
    return dispatch => {
        dispatch(loading());
        firebase.database().ref(`password-manager/${payload.key}`).update({
            url: payload.url,
            username: payload.username,
            password: payload.password,
            updatedAt: Date.now()
        })
            .then(() => dispatch(swalEditPswSuccess()))
            .catch(() => dispatch(error()))
    }
}

export const deletePassword = (payload) => {
    return dispatch => {
        dispatch(loading());
        firebase.database().ref(`password-manager/${payload.key}`).set(null)
            .then(() => dispatch(swalDeletePswSuccess()))
            .catch(() => dispatch(error()))
    }
}


const snapshotToArray = (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

const createPasswordSuccess = () => {
    return {
        type: CREATE_PASSWORD_SUCCESS
    }
}

const editPasswordSuccess = () => {
    return {
        type: EDIT_PASSWORD_SUCCESS
    }
}

const getPasswordsSuccess = (payload) => {
    return {
        type: GET_PASSWORD_SUCCESS,
        payload: payload
    }
}

const deletePasswordSuccess = () => {
    return {
        type: DELETE_PASSWORD_SUCCESS
    }
}

const swalCreatePswSuccess = () => {
    return dispatch => {
        swal("Success!", "New password created", "success");
        document.querySelector('#url').value = '';
        document.querySelector('#username').value = '';
        document.querySelector('#password').value = '';
        dispatch(createPasswordSuccess());
    }
}

const swalEditPswSuccess = () => {
    return dispatch => {
        swal("Edit success!", "Edit password successfully", "success");
        dispatch(editPasswordSuccess())
    }
}

const swalDeletePswSuccess = () => {
    return dispatch => {
        swal("Delete success!", "Delete password successfully", "success");
        dispatch(deletePasswordSuccess())
    }
}

export const editModalOpen = (payload) => {
    return {
        type: EDIT_MODAL_OPEN,
        payload
    }
}

export const editModalClose = () => {
    return {
        type: EDIT_MODAL_CLOSE,
    }
}

const loading = () => {
    return {
        type: LOADING
    }
}

const error = () => {
    return {
        type: ERROR
    }
}