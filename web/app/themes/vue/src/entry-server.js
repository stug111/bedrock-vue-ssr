/* global context, dispatch */
import { createApp } from './app'
import renderVueComponentToString from 'vue-server-renderer/basic';

const { app, router, store } = createApp()

router.push(context.url)
store.commit('site/setMenus', context.menus)

renderVueComponentToString(app, (err, html) => {
    dispatch(html);
})

