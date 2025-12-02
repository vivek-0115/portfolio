<script setup>
const experiences = [
  {
    title: "Machine Learning & Data Science Student",
    place: "IIT Madras BS Degree Program",
    duration: "2023 – Present",
    points: [
      "Gaining strong foundations in Data Science, Machine Learning, Statistics, and Python.",
      "Working on ML assignments, quizzes, and applied projects covering regression, classification, and data analysis.",
      "Building hands-on experience with real-world datasets and predictive modeling workflows."
    ]
  },

  {
    title: "Backend & Web Development Practitioner",
    place: "Self-Driven Projects & Learning",
    duration: "2024 – Present",
    points: [
      "Building backend systems using Python, Flask, and FastAPI, with clean RESTful API patterns.",
      "Learning frontend fundamentals using Vue.js + Tailwind CSS to build interactive web apps.",
      "Implemented authentication, session management, and database models using SQL & SQLite.",
      "Experimenting with caching, async tasks, and automation using Redis + Celery."
    ]
  },

  {
    title: "AI, Deep Learning, and GenAI Learner",
    place: "Self Projects & Research",
    duration: "2025 – Present",
    points: [
      "Hands-on with PyTorch, TensorFlow, and architectures like CNNs, Transformers, LLMs.",
      "Building GenAI apps using LangChain, LangGraph, RAG pipelines, and vector databases.",
      "Exploring MCP (Model Context Protocol) and LLM-based system integrations.",
      "Developing mini AI tools and experimenting with fine-tuning techniques."
    ]
  }
];
</script>

<template>
  <section class="border-ob">
    <div class="container mx-auto border-lr flex flex-col">

      <div class="border-ob py-12 px-8">
        <p class="py-4" style="color: var(--primary-blue);">Experiences</p>
        <p class="text-3xl font-medium">Roles and Responsibilities That Shaped My Skills</p>
      </div>

      <div id="exp-card" class="grid grid-cols-2">

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class=""
        >
          <h2 class="text-2xl font-medium">{{ exp.title }}</h2>

          <p class="text-lg py-2">{{ exp.place }}</p>

          <span class="text-gray-500">{{ exp.duration }}</span>

          <ul class="flex flex-col list-disc gap-4 text-gray-500 mt-4">
            <li v-for="(point, i) in exp.points" :key="i" class="ml-4">
              {{ point }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
