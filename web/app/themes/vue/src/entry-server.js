/* global context, dispatch */
import { createApp } from './app'
import renderVueComponentToString from 'vue-server-renderer/basic';

const { app, router } = createApp()

router.push(context.url)

renderVueComponentToString(app, (err, html) => {
    if (err) {
        throw new Error(err);
    }
    dispatch(html);
})
