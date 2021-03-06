export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  head: {
    titleTemplate: "Lucas BELLIER | %s",
    htmlAttrs: {
      lang: "fr"
    },

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Lucas BELLIER's website, made with love from Normandie. I'm a full stack developer based in France"
      },
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Lucas BELLIER's website, made with love from Normandie. I'm a full stack developer based in France"
      },

      //Open Graph + Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lucasblr.fr" },
      {
        property: "og:title",
        content: "Lucas BELLIER just portfolio"
      },
      { property: "og:site_name", content: "lucasblr.fr" },
      {
        property: "og:image",
        content: "/card.jpg"
      },
      {
        property: "og:description",
        content:
          "Lucas BELLIER's website, made with love from Normandie. I'm a full stack developer based in France"
      },

      //Twitter
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Lucas BELLIER just portfolio"
      },
      {
        name: "twitter:description",
        content:
          "Lucas BELLIER's website, made with love from Normandie. I'm a full stack developer based in France"
      },
      {
        name: "twitter:image",
        content: "/card.jpg"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@400;700&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/device"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  styleResources: {
    scss: ["~/assets/scss/*.scss"]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
