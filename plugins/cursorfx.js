import { CursorFx } from '@luxdamore/vue-cursor-fx'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component(CursorFx.name, CursorFx)
})