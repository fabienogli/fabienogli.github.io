const state = {
    nav: [],
}

const getters = {
    all(state) {
        return state.nav
    }
}

const mutations = {
    setNav(state, nav) {
        state.nav = nav
    }
}

const actions = {
    setNav({commit}, nav) {
        commit('setNav', nav)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}