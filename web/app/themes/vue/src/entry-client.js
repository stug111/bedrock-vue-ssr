import { createApp } from './app';

const { app, store } = createApp()

store.commit('site/setMenus', window.context.menus)

app.$mount('#app')
