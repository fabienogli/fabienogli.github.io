const state = {
    moi:[],
    logo: []
}

const getters = {
    all(state) {
        return state
    },
    moi(state) {
        return state.moi
    },
    logo(state) {
        return state.logo
    }
}

const mutations = {
    setMoi(state, moi) {
        state.moi = moi
    },
    setLogo(state, logo) {
        state.logo = logo
    }
}

const actions = {
    setMoi({commit}, about) {
        commit('setMoi', about)
    },
    setLogo({commit}, about) {
        commit('setLogo', about)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}