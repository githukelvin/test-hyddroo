// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-security",
    "@vee-validate/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/devtools",
  ],

  imports: {
    dirs: ["store"],
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VForm",
      Field: "VField",
      FieldArray: "VFieldArray",
      ErrorMessage: "VErrorMessage",
    },
  },

  build: {
    extractCSS: true,
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.VITE_SUPABASE_URL,
      supabaseAnonKey: process.env.VITE_SUPABASE_KEY,
      africaSmsKey: process.env.VITE_AT_APIKEY,
      africaUsername: process.env.VITE_AT_USERNAME,
    },
  },
  supabase: { redirect: false },
  css: ["~/assets/styles/main.css", "~/assets/styles/index.css"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "icon",
          sizes: "128x128 ",
          href: "/favicon.ico",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/f1deb10f83.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: "~/assets/styles/index.css",
        configPath: "tailwind.config",
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: "first",
        viewer: true,
      },
      autoprefixer: {},
    },
  },

  devtools: {
    enabled: true,
  },
});
