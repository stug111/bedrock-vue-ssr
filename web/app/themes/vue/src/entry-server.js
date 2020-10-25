/* global context, dispatch */
import { createApp } from './app'
import renderVueComponentToString from 'vue-server-renderer/basic';

const { app } = createApp()

renderVueComponentToString(app, (err, html) => {
    if (err) {
        throw new Error(err);
    }
    dispatch(html);
});