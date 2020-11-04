/* global context, dispatch */
import { createApp } from './app'
import renderVueComponentToString from 'vue-server-renderer/basic';

new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)
    store.commit('site/setMenus', context.menus)

    router.onReady(() => {
        const matchedComponents = router.getMatchedComponents();
        if (!matchedComponents.length) {
            return reject({ code: 404 });
        }
        resolve(app);
    }, reject)
}).then(app => {
    renderVueComponentToString(app, (err, html) => {
        dispatch(html);
    })
}).cache(err => {
    throw new Error(err)
})


