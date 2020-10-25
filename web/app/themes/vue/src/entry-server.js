import app from './app'
import router from './router'
import renderVueComponentToString from 'vue-server-renderer/basic'

router.push(context.url)

renderVueComponentToString(app, (err, res) => {
    if ( err ) {
        throw new Error(err)
    }
    dispatch(res)
})