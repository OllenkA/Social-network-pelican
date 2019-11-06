import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';


let initialState = {
    posts: [
        {id: 1, post: 'I fly in Turkey!!! I will swimming in the sea soon!', likesCount: 343},
        {id: 2, post: "My favorite food today - it's  the fish", likesCount: 13},
        {id: 3, post: 123432, likesCount: 3},
        {
            id: 4, post: 'В приложениях с множеством компонентов очень важно освобождать используемые' +
                ' системные ресурсы когда компоненты удаляются. Первоначальный рендеринг компонента в ' +
                'DOM называется «монтирование» (mounting). Нам нужно устанавливать таймер всякий раз, ' +
                'когда это происходит. Каждый раз когда DOM-узел, созданный компонентом, удаляется, ' +
                'происходит «размонтирование» (unmounting). Чтобы избежать утечки ресурсов, ' +
                'мы будем сбрасывать таймер при каждом «размонтировании». Объявим специальные методы, ' +
                'которые компонент будет вызывать при монтировании и размонтировании.', likesCount: 123
        },
    ],
    profile: null,
    status: '',
};

export const getUserPageTC = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(data));

};

export const getUserStatusTC = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const deletePostTC = (postId) => {
     deletePost(postId)
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 1,
                post: action.postMessage,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case DELETE_POST: {
            let postsArray = state.posts.filter((post) => post.id !== action.postId);
            return {
                ...state,
                posts: [...state, postsArray]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (postMessage) => ({type: ADD_POST, postMessage});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const deletePost = (postId) => ({type: DELETE_POST, postId});


export default profileReducer;