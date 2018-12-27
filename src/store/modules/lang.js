const state = {
    lang: "",
}

const getters = {
    get(state) {
      return state.lang
    }
}

const mutations = {
  setLang(state, lang) {
    state.lang = lang
  }
}

const actions = {
  setLang({commit}, lang) {
    commit('setLang', lang)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}