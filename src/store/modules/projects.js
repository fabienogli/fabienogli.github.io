const state = {
    projects: [],
}

const getters = {
    all(state) {
        return state.projects
    }
}

const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    }
}

const actions = {
    setProjects({commit}, projects) {
        commit('setProjects', projects)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}