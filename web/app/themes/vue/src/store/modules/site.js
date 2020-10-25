// state
const state = () => ({
    menus: []
})

// getters
const getters = {
    getMenus(state) {
        return state.menus
    }
}

// actions
const actions = {}

// mutations
const mutations = {
    setMenus(state, menus) {
        state.menus = menus
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
