export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) =>{
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjectProps}
        }
        return u;
    })
};

// users: state.users.map(u => {
//     if (u.id === action.userId) {
//         return {...u, followed: true}
//     }
//     return u;
// })