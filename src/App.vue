<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMainStore } from './stores/index.js'

import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { SunIcon } from '@heroicons/vue/24/outline'
import { MoonIcon } from '@heroicons/vue/24/outline'

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

// theme state
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

    <section class="border-tb sticky top-0 z-50 backdrop-blur-md">
      <nav class="container mx-auto border-lr px-8 py-4 flex justify-between">

        <div class=" text-4xl font-bold bonheur-royale-regular" style="color: var(--primary-blue);">Bytes Code</div>

        <div class="flex items-center gap-4">
          <a href="#home" class="border-nav-hover px-4 py-2">Home</a>
          <a href="#about" class="border-nav-hover px-4 py-2">About</a>
          <a href="#skills" class="border-nav-hover px-4 py-2">Skills</a>
          <a href="#projects" class="border-nav-hover px-4 py-2">Projects</a>
          <a href="#experience" class="border-nav-hover px-4 py-2">Experience</a>
          <a href="#achievements" class="border-nav-hover px-4 py-2">Achievements</a>
        </div>


        <!-- Search + Theme Dropdown -->
        <div class=" flex">

          <!-- Search -->
          <button class="border-all p-2 border-hover">
            <MagnifyingGlassIcon class="w-6 h-6" />
          </button>

          <!-- Theme dropdown -->
          <div class="relative group">

            <!-- Main icon -->
            <button class="p-2 border-all border-hover">
              <component :is="theme === 'light' ? SunIcon : MoonIcon" class="w-6 h-6" />
            </button>

            <!-- Dropdown -->
            <div class="absolute right-0 shadow-md backdrop-blur-lg
               invisible group-hover:visible transition-all duration-200">
              <button class=" p-2 border-all border-hover" @click="toggleTheme('light')">
                <SunIcon class="w-6 h-6" />
              </button>

              <button class=" p-2 border-all border-hover" @click="toggleTheme('dark')">
                <MoonIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <a href="#contact" class="border-all p-2 border-hover">Contact</a>
        </div>
      </nav>
    </section>

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
