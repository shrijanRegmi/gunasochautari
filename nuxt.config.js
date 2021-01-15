export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'गुनासो चौतारी',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Good news site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap'
      },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' },
      {
        src: 'https://kit.fontawesome.com/a96d6b5cc5.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  target: 'static',
  generate: {
    routes: [
      '/news-view/1',
      '/news-view/2',
      '/news-view/3',
      '/news-view/4',
      '/news-view/5',
      '/news-view/6',
      '/news-view/7',
      '/news-view/8',
      '/news-view/9',
      '/news-view/10',
      '/news-view/11',
      '/news-view/12',
      '/news-view/13',
      '/news-view/14',
      '/news-view/15',
      '/news-view/16',
      '/news-view/17',
      '/news-view/18',
      '/news-view/19',
      '/news-view/20',
      '/news-view/21',
      '/news-view/22',
      '/news-view/23',
      '/news-view/24',
      '/news-view/25',
      '/news-view/26',
      '/news-view/27',
      '/news-view/28',
      '/news-view/29',
      '/news-view/30',
      '/news-view/31',
      '/news-view/32',
      '/news-view/33',
      '/news-view/34',
      '/news-view/35',
      '/news-view/36',
      '/news-view/37',
      '/news-view/38',
      '/news-view/39',
      '/news-view/40',
      '/news-view/41',
      '/news-view/42',
      '/news-view/43',
      '/news-view/44',
    ]
  }
}
