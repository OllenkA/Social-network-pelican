const ADD_PHOTO = 'photo/ADD-PHOTO';
const UPDATE_PHOTO = 'photo/UPDATE-PHOTO';

let initialState = {
    photos: [
        { id: 1, photo: 'https://s1.1zoom.ru/prev2/531/Painting_Art_Brown_haired_Hair_530195_225x225.jpg' }
    ],
    newPhoto: ''
};

const photoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PHOTO: {
            let newMyPhoto = {
                id: 1,
                photo: state.newPhoto,
            };
            return {
                ...state,
                photos: [...state.photos, newMyPhoto],
                newPhoto: ''
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state,
                newPhoto: action.url

            }
        }
        default:
            return state;
    }
};

export const addPhotoActionCreator = () => ({ type: ADD_PHOTO });

export const updatePhotoActionCreator = (photo) => ({ type: UPDATE_PHOTO, url: photo });

export default photoReducer;