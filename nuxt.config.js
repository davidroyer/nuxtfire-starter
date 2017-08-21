const axios = require('axios')
const _ = require('lodash');

module.exports = {
  /*
  ** Build configuration
  */
  generate: {
    dir: 'dist/public',
    routes: function() {
      return axios.get('http://localhost:5000/nuxtfireapi/us-central1/api/api/posts')
      .then((res) => {
        return _.map(res.data, function(post, key) {
          return `/posts/${post.slug}`
        })
      })
    }
    // routes: function () {
    //   return axios.get('http://localhost:5000/nuxtfireapi/us-central1/api/api/posts')
    //   .then((res) => {
    //     console.log(res);
    //     return res.data.map((post) => {
    //       return '/posts/' + post.slug
    //     })
    //   })
    // }
  },
  build: {},
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:5000/nuxtfireapi/us-central1/api'
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  // mode: 'spa',
  /*
  ** Modules
  */
  modules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api', { target: 'http://localhost:5000/nuxtfireapi/us-central1/api' }]
  ],
  plugins: ['~/plugins/element-ui.js'],
  css: [
    '~/assets/css/main.css'
  ]
}
