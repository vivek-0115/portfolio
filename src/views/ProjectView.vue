<script setup>
import { Icon } from '@iconify/vue'

const projects = [
  {
    title: "Quiz Master — Intelligent Quiz & Learning Platform",
    shortTag: "Full-stack quiz & learning system",
    description:
      "A full-stack quiz management platform that allows users to take quizzes, track progress, and receive automated reminders and performance reports.",
    tech: {
      frontend: "Vue.js, Bootstrap 5",
      backend: "Python, Flask, REST API",
      database: "SQLite",
      async: "Redis + Celery",
      email: "SMTP (Gmail)",
    },
    repoUrl: "https://github.com/yourusername/quiz-master",
    liveUrl: "https://your-quiz-master-demo.com"
  },
  {
    title: "HomeEase — Smart Home Utility & Service Platform",
    shortTag: "Service booking & management",
    description:
      "A web app to manage home services, bookings, and user profiles with role-based access and real-time status updates.",
    tech: {
      frontend: "Vue.js, Tailwind CSS",
      backend: "Python, Flask",
      database: "PostgreSQL",
      async: "Celery + Redis",
      email: "Flask-Mail + SMTP",
    },
    repoUrl: "https://github.com/yourusername/homeease",
    liveUrl: "https://homeease-demo.com"
  },
  // add more projects here
]
</script>

<template>
  <section class="border-ob">
    <div class="container mx-auto border-lr flex flex-col">

      <!-- Section header -->
      <div class="border-ob py-12 px-8">
        <p class="py-4" style="color: var(--primary-blue);">Projects</p>
        <p class="text-3xl font-medium">
          A Collection of the Work I've Built and Shipped
        </p>
      </div>

      <!-- Projects list -->
      <div class="px-8 py-4">
        <div id="card-holder" class="flex flex-row w-full gap-10">

          <div v-for="project in projects" :key="project.title" class="">
            <h2 class="text-2xl font-medium">
              {{ project.title }}
            </h2>
            <p class="text-sm text-blue-500 mt-1" v-if="project.shortTag">
              {{ project.shortTag }}
            </p>

            <p class="text-gray-500 dark:text-gray-400 mt-3">
              {{ project.description }}
            </p>

            <h3 class="text-xl font-medium text-gray-700 dark:text-gray-300 mt-6">
              Tech Stack
            </h3>
            <ul class="pl-4 flex flex-col gap-1 mt-2 text-gray-700 dark:text-gray-300">
              <li v-if="project.tech.frontend">
                <span class="font-semibold">Frontend: </span>{{ project.tech.frontend }}
              </li>
              <li v-if="project.tech.backend">
                <span class="font-semibold">Backend: </span>{{ project.tech.backend }}
              </li>
              <li v-if="project.tech.database">
                <span class="font-semibold">Database: </span>{{ project.tech.database }}
              </li>
              <li v-if="project.tech.async">
                <span class="font-semibold">Async Tasks: </span>{{ project.tech.async }}
              </li>
              <li v-if="project.tech.email">
                <span class="font-semibold">Email Service: </span>{{ project.tech.email }}
              </li>
            </ul>

            <!-- Buttons -->
            <section class="flex flex-row gap-12 mt-8 justify-center">
              <!-- Repo / View Code -->
              <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 border
                       border-blue-500 text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-blue-950
                       transition-colors text-sm font-medium">
                <Icon icon="mdi:github" class="w-5 h-5" />
                <span>View Code</span>
              </a>

              <!-- Live / Explore Project -->
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="inline-flex items-center gap-2 px-4 py-2
                       bg-blue-600 text-white text-sm font-medium
                       hover:bg-blue-700 transition-colors">
                <span>Explore Project</span>
              </a>
            </section>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* you can customize further here if needed */
</style>
