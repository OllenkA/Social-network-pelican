const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const UPDATE_MY_MESSAGE = 'UPDATE-MY-MESSAGE';

let initialState = {
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'Hello, my dear!' },
            { id: 3, message: 'Where are you now?' },
            { id: 4, message: 'Shopping:)' },
            { id: 5, message: 'Really?' },
            { id: 6, message: 'Yeeeeeeees!!!!' },
        ],
        users: [
            { id: 1, name: 'Sergio', photo: '' }, 
            { id: 2, name: 'Ann', photo: '' },
            { id: 3, name: 'David Moor', photo: '' },
            { id: 4, name: 'Nick Vionti', photo: '' },
            { id: 5, name: 'Angel', photo: '' },
            { id: 6, name: 'Ivan Nicher', photo: '' },
            { id: 7, name: 'Kleo Limber', photo: '' },
            { id: 8, name: 'Nick Safronov', photo: '' },
            { id: 9, name: 'Soul Mail', photo: '' },
        ],
        myMessage: ''
};


const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MY_MESSAGE: {
            let newMyMessage = {
                id: 1,
                message: state.myMessage,
            };
            return {
                ...state,
                messages: [...state, newMyMessage],
                myMessage: ''
            }
        }
        case UPDATE_MY_MESSAGE: {
            return {
                ...state,
                myMessage: action.text
            }
        }
        default:
            return state;
    }
}

export const addMyMessageActionCreator = () => ({ type: ADD_MY_MESSAGE })

export const updateMyMessageActionCreator = (text) => 
    ({ type: UPDATE_MY_MESSAGE, text: text})

export default dialogReducer;