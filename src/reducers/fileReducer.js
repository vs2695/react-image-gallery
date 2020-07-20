import actionType from '../actions/actionTypes';
let initialState = {
    all: []
}

const fileReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);
    console.log('new state', newState);

    switch (action.type) {
        case actionType.FILE_UPLOADED:
            // console.log('FILE_UPLOADED', action.file);
            let updated = Object.assign([], newState.all);
            console.log('updated state', updated)
            updated.unshift(action.file);
            newState['all'] = updated;
            console.log(newState);
            return newState;

        default:
            return state;
    }
}

export default fileReducer;