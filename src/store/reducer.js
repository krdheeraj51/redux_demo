import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
}


const reducer = (state = initialState, action) => {
    /**
     * if statement
     */
    // if (action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }

    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD_INCREMENT') {
    //     return {
    //         counter: state.counter + action.value
    //     }
    // }
    // if (action.type === 'SUB_DECREMENT') {
    //     return{
    //         counter: state.counter - action.value
    //     }
    // }
    /**
     * using switch case
     */
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_INCREMENT:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB_DECREMENT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.results.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;
