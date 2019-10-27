import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import photoReducer from "./photo-reducer";



let store = {
    _state: {
        dialogPage: {
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
        },

        myFriends: {
            friends: [
                { id: 1, name: 'Sergio', photo: 'https://static-s.aa-cdn.net/img/ios/1203926545/73b5f7ee1a56690b6b2567aee224cc35' },
                { id: 2, name: 'Ann Rivolly', photo: 'https://pp.userapi.com/c633523/v633523338/171ea/s-KVUI5XhCs.jpg?ava=1' },
                { id: 3, name: 'David Moor', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9q_Nrs7vPHdcZMDMBu9WcUsZO5jejAk__AOZx8sGLqYKPPcd4Q' },
                { id: 4, name: 'Sandra Moerti', photo: 'https://pp.userapi.com/c629530/v629530781/1b60f/K1VmTP_oe-s.jpg?ava=1' },
                { id: 5, name: 'Angel', photo: 'https://pp.userapi.com/c626420/v626420784/4e28d/BKBRsQTmQgo.jpg?ava=1' },
                { id: 6, name: 'Alex White', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXkeCmt7ARp1XSu0_6ix1ykdv_Zj8u3AqyTnran_kuR19sspX' },
                { id: 7, name: 'Kleo Limber', photo: 'https://i.pinimg.com/originals/26/e5/d6/26e5d60de4694c9c8c1fb5067956d247.jpg' },
                { id: 8, name: 'Nick Safronov', photo: 'https://pp.userapi.com/c837726/v837726764/3b5b2/KYiBQZyb9yg.jpg?ava=1' },
            ],
        },

        profilePage: {
            posts: [
                { id: 1, post: 'I fly in Turkey!!! I will swimming in the sea soon!', likesCount: 343 },
                { id: 2, post: "My favorite food today - it's  the fish", likesCount: 13 },
                { id: 3, post: 123432, likesCount: 3 },
                // {id: true, post: 'I fly in Turkey!!! I will swimming in the sea soon!', likesCount: 343},
                { id: 4, post: 'В приложениях с множеством компонентов очень важно освобождать используемые системные ресурсы когда компоненты удаляются. Первоначальный рендеринг компонента в DOM называется «монтирование» (mounting). Нам нужно устанавливать таймер всякий раз, когда это происходит. Каждый раз когда DOM-узел, созданный компонентом, удаляется, происходит «размонтирование» (unmounting). Чтобы избежать утечки ресурсов, мы будем сбрасывать таймер при каждом «размонтировании». Объявим специальные методы, которые компонент будет вызывать при монтировании и размонтировании.', likesCount: 123 },
                { id: 5, post: 'adadefefasgr ncjkxa snxjcdscn jjdkhfhdsfj jdnc dncjdncjdnjncfmiem kcfknmvcjkn fjkvnfjnvjfvnjf nvjfnvjfnvjfnv', likesCount: 123 },
            ],
            postMessage: ''
        },

        myPhotos: {
            photos: [
                { id: 1, photo: 'https://s1.1zoom.ru/prev2/531/Painting_Art_Brown_haired_Hair_530195_225x225.jpg' }
            ],
            newPhoto: ''
        }

        // profile: {
        //     name: '',
        //     city: '',
        //     sex: ''
        // }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.myPhotos = photoReducer(this._state.myPhotos, action);

        this._callSubscriber(this._state);

    }
};


export default store;