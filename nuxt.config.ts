import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-12-13",
  modules: [
    "@nuxthub/core",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt"
  ]
})