<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMainStore } from './stores/index.js'

import { SunIcon } from '@heroicons/vue/24/outline'
import { MoonIcon } from '@heroicons/vue/24/outline'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/24/outline'

import { ref, onMounted } from 'vue'

import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'
import Skill from './views/SkillView.vue'
import Project from './views/ProjectView.vue'
import Experience from './views/ExperienceView.vue'
import Achievement from './views/AchievementView.vue'
import Contact from './views/ContactView.vue'

import Footer from './components/Footer.vue'

const store = useMainStore()

// mobile drawer state
const isOpen = ref(false)

// theme state (kept from your original)
const theme = ref("light")  // light -> sun, dark -> moon

const toggleTheme = (value) => {
  theme.value = value
  const html = document.documentElement

  if (value === "dark") {
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

// Load theme on page refresh
onMounted(() => {
  const saved = localStorage.getItem("theme") || "light"
  toggleTheme(saved)
})
</script>

<template>
  <div class="grid grid-cols-1">

    <!-- NAVBAR (glassy/backdrop kept as before) -->
    <section class="border-tb sticky top-0 z-50 backdrop-blur-md">
      <nav class="container mx-auto border-lr px-8 py-4 flex items-center justify-between relative">
        <!-- Brand (kept exactly) -->
        <div class="text-4xl font-bold bonheur-royale-regular" style="color: var(--primary-blue);">
          Bytes Code
        </div>

        <!-- Desktop Menu (unchanged, visible md+) -->
        <div class="hidden md:flex flex-col md:flex-row bg-transparent md:bg-transparent h-auto md:h-auto gap-0 md:gap-0">
          <a href="#home" class="border-nav-hover px-4 py-2">Home</a>
          <a href="#about" class="border-nav-hover px-4 py-2">About</a>
          <a href="#skills" class="border-nav-hover px-4 py-2">Skills</a>
          <a href="#projects" class="border-nav-hover px-4 py-2">Projects</a>
          <a href="#experience" class="border-nav-hover px-4 py-2">Experience</a>
          <a href="#achievements" class="border-nav-hover px-4 py-2">Achievements</a>
        </div>

        <!-- Right controls:
             On mobile: show theme toggle, contact, menu button (in that order)
             On md+: show theme dropdown and contact (menu hidden)
        -->
        <div class="flex items-center gap-3">
          <!-- Theme toggle (kept, always visible) -->
          <div class="relative group">
            <button class="p-2 border-all border-hover" @click="toggleTheme(theme === 'light' ? 'dark' : 'light')" aria-label="Toggle theme">
              <component :is="theme === 'light' ? SunIcon : MoonIcon" class="w-6 h-6" />
            </button>

            <!-- Desktop dropdown (kept, visible on hover - same behavior) -->
            <div class="absolute right-0 shadow-md backdrop-blur-lg invisible group-hover:visible transition-all duration-200 mt-2 rounded">
              <button class="p-2 border-all border-hover" @click="toggleTheme('light')">
                <SunIcon class="w-6 h-6" />
              </button>
              <button class="p-2 border-all border-hover" @click="toggleTheme('dark')">
                <MoonIcon class="w-6 h-6" />
              </button>
            </div>
          </div>

          <!-- Contact (visible on all sizes; styling preserved) -->
          <a href="#contact" class="border-all p-2 border-hover">Contact</a>

          <!-- Mobile menu button (moved to right) -->
          <button
            @click="isOpen = true"
            class="md:hidden p-2 border-all border-hover rounded"
            aria-label="Open menu"
            aria-controls="mobile-drawer"
            aria-expanded="false"
          >
            <Bars3Icon class="w-6 h-6" />
          </button>
        </div>
      </nav>
    </section>

    <!-- MOBILE SLIDE MENU (from LEFT) - keeps glassy look -->
    <transition name="slide-left">
      <div v-if="isOpen" class="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
        <!-- overlay closes drawer -->
        <button class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="isOpen = false" aria-label="Close menu overlay"></button>

        <!-- Drawer (from left) -->
        <aside
          id="mobile-drawer"
          class="relative w-72 max-w-[84vw] h-full bg-white/18 dark:bg-gray-900/18 backdrop-blur-md border-r border-white/10 p-6 shadow-xl
                 flex flex-col gap-4"
        >
          <!-- header + close -->
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Menu</h3>
            <button class="p-2 border-all border-hover rounded" @click="isOpen = false" aria-label="Close menu">
              <XMarkIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Nav Links (kept same labels & order) -->
          <nav class="flex flex-col gap-2 mt-2">
            <a href="#home" class="border-nav-hover px-4 py-2" @click="isOpen = false">Home</a>
            <a href="#about" class="border-nav-hover px-4 py-2" @click="isOpen = false">About</a>
            <a href="#skills" class="border-nav-hover px-4 py-2" @click="isOpen = false">Skills</a>
            <a href="#projects" class="border-nav-hover px-4 py-2" @click="isOpen = false">Projects</a>
            <a href="#experience" class="border-nav-hover px-4 py-2" @click="isOpen = false">Experience</a>
            <a href="#achievements" class="border-nav-hover px-4 py-2" @click="isOpen = false">Achievements</a>
            <a href="#contact" class="border-nav-hover px-4 py-2" @click="isOpen = false">Contact</a>
          </nav>

          <div class="mt-auto text-sm opacity-80">© Bytes Code</div>
        </aside>
      </div>
    </transition>

    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        <Achievement />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  </div>
</template>

<style scoped>
/* slide-from-left transition (keeps animation subtle and same feel) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.28s cubic-bezier(.2,.8,.2,1), opacity 0.2s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0%);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
