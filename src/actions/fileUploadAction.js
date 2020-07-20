import actionType from './actionTypes';

export const setUploadImage = file => ({
    type: actionType.FILE_UPLOADED,
    file: file
});