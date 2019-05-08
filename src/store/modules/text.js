const state = {
    about: [],
    nav: [],
    projects: []
}

const getters = {
    all(state) {
        return state
    },
    nav(state) {
        return state.nav
    },
    about(state) {
        return state.about
    },
    projects(state) {
        return state.projects
    }
}

const mutations = {
    setNav(state, nav) {
        state.nav = nav
    },
    setAbout(state, about) {
        state.about = about
    },
    setProjects(state, projects) {
        state.projects = projects
    }
}

const actions = {
    setNav({commit}, about) {
        commit('setNav', about)
    },
    setAbout({commit}, about) {
        commit('setAbout', about)
    },
    setProjects({commit}, about) {
        commit('setProjects', about)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}