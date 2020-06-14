const resolve = require('path').resolve
export default {
  mode: 'spa',
  globalName: process.env.npm_package_name,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/qiankun',
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  router: {
    base: process.env.NODE_ENV === "production" ? '/micro-frontends/' : '/',
    extendRoutes(routes) {
      routes.push({
        name: 'home',
        path: '/micro-frontends',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: "//leooman.com/micro-frontends",
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
