<script setup>
import { Icon } from '@iconify/vue'
import AnimatedButton from '../components/AniButton.vue';
import { onMounted, onBeforeUnmount } from "vue";

let typingTimeout;

onMounted(() => {
  // ===== HERO BOX ENTRANCE ANIMATIONS =====
  const rightBox = document.querySelector(".load-box-right");
  const leftBox = document.querySelector(".load-box-left");
  const bottomBox = document.querySelector(".load-box-bottom");

  setTimeout(() => {
    rightBox?.classList.add("show");
    leftBox?.classList.add("show");
    bottomBox?.classList.add("show");
  }, 50);

  // ===== TYPEWRITER EFFECT =====
  const words = [
    "Machine Learning",
    "Deep Learning",
    "Generative AI"
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;

  const speed = 120;
  const deleteSpeed = 60;
  const delayBetweenWords = 1000;

  const element = document.getElementById("typing-text");
  if (!element) return;

  function type() {
    const currentWord = words[i];
    const currentText = currentWord.substring(0, j);
    element.textContent = currentText;

    if (!isDeleting) {
      if (j < currentWord.length) {
        j++;
        typingTimeout = setTimeout(type, speed);
      } else {
        isDeleting = true;
        typingTimeout = setTimeout(type, delayBetweenWords);
      }
    } else {
      if (j > 0) {
        j--;
        typingTimeout = setTimeout(type, deleteSpeed);
      } else {
        isDeleting = false;
        i = (i + 1) % words.length;
        typingTimeout = setTimeout(type, 300);
      }
    }
  }

  type();
});

onBeforeUnmount(() => {
  if (typingTimeout) clearTimeout(typingTimeout);
});
</script>

<template>
  <section class="border-ob">
    <div class="container mx-auto border-lr px-8 py-4 flex justify-around">

      <div class=" w-xs flex flex-col justify-center items-start p-3 gap-0.5 z-10 load-box-left">
        <p class=" text-8xl font-bold tracking-wider font ml-4 bonheur-royale-regular name ">Vivek</p>
        <p class=" text-8xl font-bold tracking-wider ml-12 bonheur-royale-regular name">Kumar.</p>

        <div class=" h-1 w-20 bg-[#7e4848] ml-4 mb-2"></div>

        <div class="flex flex-row gap-4 ml-4 mt-2">

          <!-- GitHub -->
          <a href="https://github.com/vivek-0115" target="_blank"
            class="border-all p-2 border-hover transition">
            <Icon icon="mdi:github" class="w-6 h-6" />
          </a>

          <!-- LeetCode -->
          <a href="https://leetcode.com/u/vivek-0115/" target="_blank"
            class="border-all p-2 border-hover transition">
            <Icon icon="simple-icons:leetcode" class="w-6 h-6 text-yellow-500" />
          </a>

          <!-- Kaggle -->
          <a href="https://www.kaggle.com/vivek0620" target="_blank"
            class="border-all p-2 border-hover transition">
            <Icon icon="simple-icons:kaggle" class="w-6 h-6 text-sky-500" />
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/vivek-0115-kumar/" target="_blank"
            class="border-all p-2 border-hover transition">
            <Icon icon="mdi:linkedin" class="w-6 h-6 text-blue-600" />
          </a>

        </div>

      </div>

      <div>
        <img src="../assets/vivek.png" alt="" width="375" class="load-box-bottom">
      </div>

      <div class=" w-lg p-3 flex flex-col justify-center gap-4 load-box-right">
        <p class="text-blue-600 tracking-[2px] ">-Introduction</p>
        <p class="text-3xl font-medium">
          Backend Developer with <br>
          <span id="typing-text" class="typing text-blue-700 dark:text-blue-400"></span> Expertise.
        </p>
        <p class="text-gray-600">I build scalable backend systems and efficient APIs, developing intelligent ML,
          deep learning, and GenAI solutions that turn data into reliable, real-world AI applications.</p>

        <AnimatedButton label="Download CV"></AnimatedButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  filter: drop-shadow(0 0 25px rgba(0, 150, 255, 0.6));
}

.name {
  text-shadow: 3px 5px 8px rgba(0, 150, 255, 0.6);
}

.load-box-right {
  opacity: 0;
  transform: translateX(150px);
  transition: all 0.8s ease-out;
}

.load-box-right.show {
  opacity: 1;
  transform: translateX(0px);
}

.load-box-left {
  opacity: 0;
  transform: translateX(-150px);
  transition: all 0.8s ease-out;
}

.load-box-left.show {
  opacity: 1;
  transform: translateX(0px);
}

.load-box-bottom {
  opacity: 0;
  transform: translateY(200px);
  transition: all 0.8s ease-out;
}

.load-box-bottom.show {
  opacity: 1;
  transform: translateY(0px);
}

.typing {
  border-right: 2px solid var(--primary-blue);
  white-space: nowrap;
  overflow: hidden;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0% {
    border-color: transparent;
  }

  50% {
    border-color: var(--primary-blue);
  }

  100% {
    border-color: transparent;
  }
}
</style>
