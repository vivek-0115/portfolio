import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    theme: "dark",
  }),

  actions: {
    increment() {
      this.count++
    },
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark"
    }
  }
})
