export default {
    menu: state => (name) => {
        return state.menus[name]
    }
}
