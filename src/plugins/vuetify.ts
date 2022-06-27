import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify : any = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
    },
    locale: {
      defaultLocale: 'ja'
    }
  })
  nuxtApp.vueApp.use(vuetify)
})