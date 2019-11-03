import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'fcc6c945-ac17-4476-b0a4-2b46a669fba2'
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    deleteFollow(userId){
        return instance.delete(`follow/` + userId)
            .then(response => {
                return response.data;
            })
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId){
        console.warn('Odsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    },
};

export const authApi = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },

};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
};