import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count : 1,
    count1:4,
    photoList: []
};
const mutations = {
    add(state,num){
        state.count += num;
    },
    reduce(state,num){
        state.count -= num;
    },
    setPhotoData(state,data){
        state.photoData = data;
    }
};
const getters = {
    count2: function (state) {
        return state.conunt+100;
    }
};
const actions = {
    addAction({commit}){
        commit('add',10);
        commit('reduce',3)
    },
    reduceAction({commit}){
        commit('reduce',2)
    },
    setPhotoData({commit},data){
        commit('setPhotoData',data);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})