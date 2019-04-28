const state = {
    contact: [],
}

const getters = {
    all(state) {
        return state.contact
    }
}

const mutations = {
    setContact(state, contact) {
        state.contact = contact
    }
}

const actions = {
    setContact({commit}, contact) {
        commit('setContact', contact)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}