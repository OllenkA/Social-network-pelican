let initialState = {
    friends: [
        { id: 1, name: 'Sergio', country: 'Belarus', followed: true, status: 'I am alone', photo: 'https://static-s.aa-cdn.net/img/ios/1203926545/73b5f7ee1a56690b6b2567aee224cc35' },
        { id: 2, name: 'Ann Rivolly', country: 'Germany', followed: true, status: 'I am a boss', photo: 'https://pp.userapi.com/c633523/v633523338/171ea/s-KVUI5XhCs.jpg?ava=1' },
        { id: 3, name: 'David Moor', country: 'USA', followed: true, status: 'I am beauty', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9q_Nrs7vPHdcZMDMBu9WcUsZO5jejAk__AOZx8sGLqYKPPcd4Q' },
        { id: 4, name: 'Sandra Moerti', country: 'Belarus', followed: false, status: 'I am alone', photo: 'https://pp.userapi.com/c629530/v629530781/1b60f/K1VmTP_oe-s.jpg?ava=1' },
        { id: 5, name: 'Angel', country: 'Bulgaria', followed: true, status: 'I am angry', photo: 'https://pp.userapi.com/c626420/v626420784/4e28d/BKBRsQTmQgo.jpg?ava=1' },
        { id: 6, name: 'Alex White', country: 'Belarus', followed: false, status: 'I am alone', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQXkeCmt7ARp1XSu0_6ix1ykdv_Zj8u3AqyTnran_kuR19sspX' },
        { id: 7, name: 'Kleo Limber', country: 'Russia', followed: true, status: 'I am alone', photo: 'https://i.pinimg.com/originals/26/e5/d6/26e5d60de4694c9c8c1fb5067956d247.jpg' },
        { id: 8, name: 'Nick Safronov', country: 'Belarus', followed: false, status: 'I am alone', photo: 'https://pp.userapi.com/c837726/v837726764/3b5b2/KYiBQZyb9yg.jpg?ava=1' },
    ]
};

const friendsReducer = (state = initialState) => {
         return state;
};

export default friendsReducer;