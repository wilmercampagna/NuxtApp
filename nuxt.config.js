const pkg = require('./package')
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool web development blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans'  }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff3860', failedColor: 'yellow', height: '4px', duration: 5000 },
  // Este indicador de carga solo funciona cuando esta en modo Spa
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#ff3860'
  // },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://nuxtappudemy.firebaseio.com/',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  env: {
    // Aqui se definen las variables de entorno
    baseUrl: process.env.BASE_URL || 'https://nuxtappudemy.firebaseio.com/',
    fbAPIKey: 'AIzaSyBTRnZ3IzfI_9h1ngppwPNZqIE9zGmDKMQ'
  },
  generate: {
    // En esta sección indicamos como generar archivos estaticos

  },
  // El rootDir lo podemos usar para definir dirección de carpetas
  // rootDir: '/pages'
  router: {
    // Asignamos el middleware a todas las rutas
    // middleware: 'log',
    // La clase que se activará al tener activo un link
    linkActiveClass: 'active'
    // Configurnado el extend routes, puedo decirle al router que cualquier 
    // ruta que no se a conocida sea redireccionada al index.vue
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    // }
  },
  // srcDir: 'SECOND-NUXT-APP'
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
