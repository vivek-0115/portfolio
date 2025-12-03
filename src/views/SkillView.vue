<script setup>
import { Icon } from '@iconify/vue'
import { onMounted, onBeforeUnmount } from "vue";

const categories = [
    {
        name: 'Languages',
        icon: 'codicon:code',
        skills: [
            { name: 'HTML', icon: 'vscode-icons:file-type-html' },
            { name: 'CSS', icon: 'vscode-icons:file-type-css' },
            { name: 'C Programing', icon: 'logos:c'},
            { name: 'Python', icon: 'logos:python' },
            { name: 'JavaScript', icon: 'logos:javascript' },
        ],
    },
    {
        name: 'Backend',
        icon: 'carbon:server',
        skills: [
            { name: 'Flask', icon: 'logos:flask' },
            { name: 'FastAPI', icon: 'logos:fastapi' },
            { name: 'Django', icon: 'logos:django-icon' },
            { name: 'REST APIs', icon: 'mdi:api' },
        ],
    },
    {
        name: 'Web Development',
        icon: 'material-symbols:web',
        skills: [
            { name: 'Vue.js', icon: 'logos:vue' },
            { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
            { name: 'Responsive UI', icon: 'mdi:monitor-cellphone' },
            { name: 'Frontend Basics', icon: 'mdi:palette-outline' },
        ],
    },
    {
        name: 'Machine Learning',
        icon: 'mdi:robot-outline',
        skills: [
            { name: 'NumPy', icon: 'logos:numpy' },
            { name: 'Pandas', icon: 'logos:pandas-icon' },
            { name: 'Scikit-Learn', icon: 'logos:scikit-learn' },
            { name: 'Jupyter', icon: 'logos:jupyter' },
        ],
    },
    {
        name: 'Deep Learning',
        icon: 'mdi:brain',
        skills: [
            { name: 'PyTorch', icon: 'logos:pytorch-icon' },
            { name: 'TensorFlow', icon: 'logos:tensorflow' },
            { name: 'CNNs / RNNs', icon: 'mdi:chart-line' },
            { name: 'Transformers', icon: 'mdi:flash-outline' },
        ],
    },
    {
        name: 'GenAI / LLM Ecosystem',
        icon: 'mingcute:ai-line',
        skills: [
            { name: 'LLMs', icon: 'mdi:message-processing-outline' },
            { name: 'RAG', icon: 'mdi:book-open-variant-outline' },
            { name: 'Hugging Face', icon: 'logos:hugging-face-icon' },
            { name: 'Prompting', icon: 'mdi:cursor-text' },
        ],
    },
    {
        name: 'Tools & DevOps',
        icon: 'mdi:tools',
        skills: [
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'GitHub', icon: 'mdi:github' },
            { name: 'Docker', icon: 'logos:docker-icon' },
            { name: 'VS Code', icon: 'logos:visual-studio-code' },
        ],
    },
]

let timelineObserver;
let revealObserver;

onMounted(() => {
  // 1) Timeline observer: adds .show/.hide on .article
  timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.remove("hide");
          el.classList.add("show");
        } else {
          el.classList.remove("show");
          el.classList.add("hide");
        }
      });
    },
    { threshold: 0.3 }
  );

  const articles = document.querySelectorAll("#article");
  articles.forEach((el) => timelineObserver.observe(el));

  // 2) General reveal observer (if you need it for other sections)
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  const revealElements = document.querySelectorAll(".reveal-section");
  revealElements.forEach((el) => revealObserver.observe(el));
});

onBeforeUnmount(() => {
  if (timelineObserver) timelineObserver.disconnect();
  if (revealObserver) revealObserver.disconnect();
});

</script>

<template>
    <section id="skills" class="border-ob">
        <div class="container mx-auto border-lr flex flex-col">

            <div class="border-ob py-10 md:py-12 px-6 md:px-8">

                <p class=" py-4" style="color: var(--primary-blue);">Skills</p>
                <p class="text-3xl font-medium">My Technical Toolkit Across Web, Backend, and AI</p>

            </div>

            <div class="py-4 px-8 flex">
                <div id="timeline" class="flex flex-col w-full">
                    <article id="article" v-for="category, index in categories" :key="category.name" class="">
                        <div class="flex flex-col relative py-12">
                            <div class="flex flex-row gap-4 mb-4 px-2 py-2">
                                <div class="numbering">
                                    <span class="num-text">{{ index + 1 }}</span>
                                </div>
                                <div class="cat-name flex w-full gap-2 items-center">
                                    <Icon :icon="category.icon" class="w-8 md:w-10 h-8 md:h-10" />
                                    <p class="text-xl">{{ category.name }}</p>
                                </div>
                            </div>

                            <div class="skill grid grid-cols-2 gap-y-8 gap-x-4 md:flex md:gap-8 px-1 py-2">
                                <div v-for="skill in category.skills" :key="skill.name" id="skill-card"
                                    class="relative flex flex-col gap-2 px-4 py-2 reveal-section ">
                                    <span></span><span></span><span></span><span></span>
                                    <div class="flex items-center gap-2">
                                        <Icon :icon="skill.icon" class="w-5 md:w-6 h-5 md:h-6" />
                                        <p class=" text-sm md:text-lg">{{ skill.name }}</p>
                                    </div>
                                    <div class="">
                                        <div class="w-full bg-gray-300 h-1 dark:bg-gray-700">
                                            <div class="h-1" style="width: 60%;background-color: var(--primary-blue);">
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.numbering {
    position: absolute;
    top: 50%;
    width: 2rem;
    height: 2rem;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.num-text {
    transform: rotate(-45deg);
}

#skill-card span {
    width: 100%;
    height: 100%;
    position: absolute;
    display: inline-block;
}

#skill-card span:nth-child(1) {
    top: 0;
    left: 0;
}
#skill-card span:nth-child(1)::before{
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    width: 1px;
    height: 10px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(1)::before{
    top: -1px;
    height: 60%;
}
#skill-card span:nth-child(1)::after{
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 10px;
    height: 1px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(1)::after{
    width: 60%;
    left: -1px;
}

#skill-card span:nth-child(2) {
    top: 0;
    right: 0;
}
#skill-card span:nth-child(2)::before{
    content: "";
    position: absolute;
    right: -1px;
    top: -1px;
    width: 10px;
    height: 1px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(2)::before{
    right: -1px;
}
#skill-card span:nth-child(2)::after{
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    width: 1px;
    height: 10px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(2)::after{
    top: -1px;
}

#skill-card span:nth-child(3) {
    bottom: 0;
    left: 0;
}
#skill-card span:nth-child(3)::before{
    content: "";
    position: absolute;
    left: -1px;
    bottom: -1px;
    width: 10px;
    height: 1px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(3)::before{
    left: -1px;
}
#skill-card span:nth-child(3)::after{
    content: "";
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 1px;
    height: 10px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(3)::after{
    bottom: -1px;
}

#skill-card span:nth-child(4) {
    bottom: 0;
    right: 0;
}
#skill-card span:nth-child(4)::before{
    content: "";
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 1px;
    height: 10px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(4)::before{
    height: 60%;
    bottom: -1px;
}
#skill-card span:nth-child(4)::after{
    content: "";
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 10px;
    height: 1px;
    background-color: var(--btn-edge);
    transition: all 0.5s ease-in-out;
}
#skill-card:hover span:nth-child(4)::after{
    width: 60%;
    right: -1px;
}

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
