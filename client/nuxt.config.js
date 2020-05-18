export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      // BEGIN: Vendor JS
      { src: "/_ui/shared/js/generatedVariables.js", body: true },
      { src: "/_ui/responsive/common/js/co-custom.min.js", body: true },
      // BEGIN Vendor JS

      // BEGIN: Page Vendor JS
      { src: "/_ui/responsive/common/js/vendor.min.js", body: true },
      { src: "/_ui/responsive/common/js/common.min.js", body: true }

      // END: Page JS
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/_ui/responsive/assets/images/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "/fonts.googleapis.com/css.css"
      },
      // BEGIN: Vendor CSS
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/_ui/responsive/theme-blue/css/style.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/_ui/responsive/components/less/main.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/widget.porterbuddy.com/porterbuddy-widget.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/_ui/responsive/common/jquery-ui-dist/jquery-ui.css"
      }
      // END: Vendor CSS
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
