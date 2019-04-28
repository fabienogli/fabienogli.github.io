const state = {
    about: [],
}

const getters = {
    all(state) {
        return state.about
    }
}

const mutations = {
    setAbout(state, about) {
        state.about = about
    }
}

const actions = {
    setAbout({commit}, about) {
        commit('setAbout', about)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}