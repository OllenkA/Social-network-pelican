const ADD_MY_MESSAGE = 'dialog/ADD-MY-MESSAGE';

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
            // { id: 8, name: 'Nick Safronov', photo: '' },
            // { id: 9, name: 'Soul Mail', photo: '' },
        ],
};


const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MY_MESSAGE: {
            let newMyMessage = {
                id: 1,
                message: action.myMessage,
            };
            return {
                ...state,
                messages: [...state.messages, newMyMessage],
            }
        }
        default:
            return state;
    }
};

export const addMyMessageActionCreator = (myMessage) => ({ type: ADD_MY_MESSAGE, myMessage });

export default dialogReducer;