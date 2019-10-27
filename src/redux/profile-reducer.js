import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        { id: 1, post: 'I fly in Turkey!!! I will swimming in the sea soon!', likesCount: 343 },
        { id: 2, post: "My favorite food today - it's  the fish", likesCount: 13 },
        { id: 3, post: 123432, likesCount: 3 },
        // {id: true, post: 'I fly in Turkey!!! I will swimming in the sea soon!', likesCount: 343},
        { id: 4, post: 'В приложениях с множеством компонентов очень важно освобождать используемые системные ресурсы когда компоненты удаляются. Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting). Нам нужно устанавливать таймер всякий раз, когда это происходит. Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting). Чтобы избежать утечки ресурсов, мы будем сбрасывать таймер при каждом «размонтировании». Объявим специальные методы, которые компонент будет вызывать при монтировании и размонтировании.', likesCount: 123 },
        { id: 5, post: 'adadefefasgr ncjkxa snxjcdscn jjdkhfhdsfj jdnc dncjdncjdnjncfmiem kcfknmvcjkn fjkvnfjnvjfvnjf nvjfnvjfnvjfnv', likesCount: 123 },
    ],
    postMessage: '',
    profile: null,
};

export const getUserPageTC = (currentUserId) => (dispatch) => {
    let userId = currentUserId;
    if (!userId) {
        userId = 2
    }
    usersApi.getUserPage(userId).then(data => {
        dispatch(setUserProfile(data));
    });
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                post: state.postMessage,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                postMessage: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postMessage: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });


export default profileReducer;