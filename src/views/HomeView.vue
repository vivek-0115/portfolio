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
    <div class="container mx-auto border-lr px-6 md:px-8 py-6">

      <!-- GRID: mobile = single column stack; md+ = 3 columns -->
      <div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-center  md:gap-8">

        <!-- IMAGE: mobile first (order 1), on md it's center column (order 2) -->
        <div class="load-box-bottom order-1 md:order-2 flex justify-center">
          <img
            src="../assets/vivek.png"
            alt="Vivek portrait"
            class="w-45 md:w-[800px] object-contain"
          />
        </div>

        <!-- NAME + SOCIALS:
             mobile: order-2, centered horizontally & vertically
             md+: becomes left column (order-1), left aligned
        -->
        <div
          class="load-box-left order-2 md:order-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-3"
        >
          <p class="text-6xl md:text-6xl font-bold tracking-wider bonheur-royale-regular name leading-none">
            Vivek Kumar
          </p>

          <div class="h-0.5 w-65 bg-[#7e4848]"></div>

          <div class="flex flex-row justify-center gap-4 md:justify-around mt-2 w-full">
            <!-- GitHub -->
            <a href="https://github.com/vivek-0115" target="_blank" class="border-all p-2 border-hover transition rounded">
              <Icon icon="mdi:github" class="w-6 h-6" />
            </a>

            <!-- LeetCode -->
            <a href="https://leetcode.com/u/vivek-0115/" target="_blank" class="border-all p-2 border-hover transition rounded">
              <Icon icon="simple-icons:leetcode" class="w-6 h-6" />
            </a>

            <!-- Kaggle -->
            <a href="https://www.kaggle.com/vivek0620" target="_blank" class="border-all p-2 border-hover transition rounded">
              <Icon icon="simple-icons:kaggle" class="w-6 h-6" />
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/vivek-0115-kumar/" target="_blank" class="border-all p-2 border-hover transition rounded">
              <Icon icon="mdi:linkedin" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- INTRODUCTION:
             mobile: order-3 and has a gap above (mt) to separate from name/socials
             md+: becomes right column (order-3), normal spacing
        -->
        <div class="load-box-right order-3 md:order-3 mt-6 md:mt-0 px-1">
          <p class="text-blue-600 tracking-[2px] -mb-1">-Introduction</p>

          <p class="text-2xl md:text-3xl font-medium leading-snug mt-2">
            Backend Developer with <br />
            <span id="typing-text" class="typing text-blue-700 dark:text-blue-400"></span> Expertise.
          </p>

          <p class="text-gray-600 text-sm md:text-base mt-2">
            I build scalable backend systems and efficient APIs, developing intelligent ML,
            deep learning, and GenAI solutions that turn data into reliable, real-world AI applications.
          </p>

          <div class="mt-4">
            <AnimatedButton label="Download CV" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* keep your visual effects exactly the same */

/* image glow */
img {
  filter: drop-shadow(0 0 25px rgba(0, 150, 255, 0.6));
}

/* name shadow */
.name {
  text-shadow: 3px 5px 8px rgba(0, 150, 255, 0.6);
}

/* load animations (unchanged) */
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

/* typing cursor (unchanged) */
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

/* small tweak: prevent very long words from overflowing on tiny screens */
@media (max-width: 380px) {
  .typing {
    white-space: normal;
  }
}
</style>
