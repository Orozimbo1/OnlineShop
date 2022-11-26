import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
    isLoggedIn: false,
    token_de_acesso: false,
    usuario: {},
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_SUCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token_de_acesso = action.payload[0];
            newState.usuario = action.payload[1];
            newState.isLoading = false;

            return newState;
        }

        case types.LOGIN_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.LOGIN_FAILURE: {
            delete axios.defaults.headers.Authorization;
            const newState = { ...initialState };
            return newState;
        }

        case types.REGISTER_CREATE_SUCESS: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_UPDATE_SUCESS: {
            const newState = { ...state };
            newState.user.nome = action.payload.nome;
            newState.user.email = action.payload.email;
            newState.isLoading = false;
            return newState;
        }

        case types.REGISTER_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            return newState;
        }

        case types.REGISTER_FAILURE: {
            const newState = { ...state };
            newState.isLoading = false;
            return newState;
        }

        default: {
            return state;
        }
    }
}
