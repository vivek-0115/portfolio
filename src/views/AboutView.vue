<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import AnimatedBox from '../components/AniBox.vue'

const aboutSections = [
  {
    title: "Who I Am",
    desc: "I'm Vivek Kumar, a backend developer and AI/ML enthusiast.",
    items: []
  },
  {
    title: "Background",
    desc: "I’m currently studying Data Science and Machine Learning, while strengthening my skills in backend and web development.",
    items: [
      "Data Science & ML",
      "Web Dev & Backend",
      "Deep Learning & GenAI"
    ]
  },
  {
    title: "Strengths",
    desc: "I specialize in building backend systems, designing efficient APIs, and developing ML and DL solutions.",
    items: [
      "Backend APIs",
      "ML/DL modeling",
      "GenAI / LLM workflows",
      "WebDev Fundamentals",
      "problem solving"
    ]
  },
  {
    title: "Current Focus",
    desc: "My current focus is on Deep Learning, LLMs, and modern Generative AI workflows.",
    items: [
      "Deep Learning",
      "Generative AI",
      "RAG",
      "LangChain & LangGraph",
      "LLM applications"
    ]
  },
  {
    title: "Goals",
    desc: "My goal is to become an AI Engineer and build intelligent, scalable systems.",
    items: [
      "AI Engineer",
      "ML Engineer",
      "Backend + AI Hybrid Developer"
    ]
  },
  {
    title: "Professional Values",
    desc: "I enjoy learning new technologies and transforming ideas into practical, real-world applications.",
    items: [
      "Deep Curiosity",
      "Strong Ownership",
      "Clean Architecture",
      "Learning Mindset",
      "Real-World Builder"
    ]
  },
  {
    title: "What I Like To Do",
    desc: "I love creating backend-driven AI tools and experimenting with end-to-end ML workflows.",
    items: [
      "AI Apps",
      "Backend APIs",
      "ML Pipelines"
    ]
  },
  {
    title: "Educational Background",
    desc: "I’m pursuing a strong academic foundation in Data Science, Machine Learning, and Backend Development, which supports my goal of becoming an AI Engineer.",
    items: []
  },
]

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          // Play entrance animation
          el.classList.remove("hide");
          el.classList.add("show");
        } else {
          // Play reverse animation
          el.classList.remove("show");
          el.classList.add("hide");
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll(".reveal-section");
  elements.forEach((el) => observer.observe(el));
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

</script>

<template>
  <section id="about" class="border-ob">
    <div class="container mx-auto border-lr flex flex-col">

      <div class="border-ob py-12 px-8">
        <p class="py-4" style="color: var(--primary-blue);">About Me</p>
        <p class="text-3xl font-medium">Where I Started and Where I’m Heading</p>
      </div>

      <div class="px-8 py-4">
        <main class="w-full flex flex-col gap-4 border-l border-blue-500 dark:border-blue-500">

          <div v-for="(section, index) in aboutSections" :key="index" class="reveal-section">
            
            <div class="diamond relative px-6 py-3">
              <p class="text-lg font-medium">{{ section.title }}</p>
              <p class="text-gray-500 dark:text-gray-400">{{ section.desc }}</p>
            </div>

            <div v-if="section.items.length" class="px-6 py-3">
              <div class="flex flex-row flex-wrap gap-12">
                <AnimatedBox
                  v-for="(item, idx) in section.items"
                  :key="idx"
                  :label="item" 
                />
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.reveal-section.show {
  opacity: 1;
  transform: translateY(0);
}

.reveal-section.hide {
  opacity: 0;
  transform: translateY(40px);
}

</style>

