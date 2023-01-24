import React from 'react';
import { useSnackbar } from 'notistack';
const { enqueueSnackbar, closeSnackbar } = useSnackbar();
const MsgSuccess = (msg) => {
    
    enqueueSnackbar(msg, {
        variant: 'success',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        persist: false,
    });
};

const MsgError = (msg) => {
    enqueueSnackbar(msg, {
        variant: 'error',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        persist: false,
    });
};

const MsgWarning = (msg) => {
    enqueueSnackbar(msg, {
        variant: 'warning',
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
        persist: false,
    });
};


export default {
    //success: _success,
    warning: _warning,
    //error: _error
}
