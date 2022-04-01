export default {  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'achmadawdi.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/fontawesome.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/Navlink.js',  mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-gsap-module'
  ],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },

  axios: {
    proxy: true
  },

  tailwindcss: {
    cssPath: '~/static/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700]
    }
  },

  fontawesome: {
    component: 'Fa',
    addCss: true,
    suffix: true,
    icons: {
      solid: ['faEnvelope'],
      brands: ['faGithub', 'faLinkedin', 'faDiscord', 'faInstagram', 'faJs', 'faNode', 'faSass', 'faPhp', 'faHtml5', 'faVuejs', 'faReact', 'faCss3', 'faJava' ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/axios'
  ],

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
