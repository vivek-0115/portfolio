<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="border-all px-4 py-2 w-40 border-hover relative">
    <div class=" absolute top-0 left-0"></div>
    <div class=" absolute top-0 right-0"></div>
    {{ label }}
    <div class=" absolute bottom-0 left-0"></div>
    <div class=" absolute bottom-0 right-0"></div>
  </button>
</template>

<style scoped>
@import "tailwindcss";
button {
  transition: all 0.3s ease-in-out;
  display: inline-block;
}

button div {
  position: absolute;
}

button div::before,
button div::after {
  content: "";
  position: absolute;
  background-color: var(--btn-edge);
  transition: all 0.3s ease-in-out;
}

/* Corner 1 - Top Left */
button div:nth-child(1)::after {
  top: -8px;
  left: -2px;
  width: 1px;
  height: 7px;
}
button div:nth-child(1)::before {
  top: -2px;
  left: -8px;
  width: 7px;
  height: 1px;
}

/* Hover animation */
button:hover div:nth-child(1)::after {
  top: -2px;
}
button:hover div:nth-child(1)::before {
  left: -2px;
}

/* Corner 2 - Top Right */
button div:nth-child(2)::after {
  top: -8px;
  right: -2px;
  width: 1px;
  height: 7px;
}
button div:nth-child(2)::before {
  top: -2px;
  right: -8px;
  width: 7px;
  height: 1px;
}

/* Hover animation */
button:hover div:nth-child(2)::after {
  top: -2px;
}
button:hover div:nth-child(2)::before {
  right: -2px;
}

/* Corner 3 - Bottom Left */
button div:nth-child(3)::after {
  bottom: -8px;
  left: -2px;
  width: 1px;
  height: 7px;
}
button div:nth-child(3)::before {
  bottom: -2px;
  left: -8px;
  width: 7px;
  height: 1px;
}

/* Hover animation */
button:hover div:nth-child(3)::after {
  bottom: -2px;
}
button:hover div:nth-child(3)::before {
  left: -2px;
}

/* Corner 4 - Bottom Right */
button div:nth-child(4)::after {
  bottom: -8px;
  right: -2px;
  width: 1px;
  height: 7px;
}
button div:nth-child(4)::before {
  bottom: -2px;
  right: -8px;
  width: 7px;
  height: 1px;
}

/* Hover animation */
button:hover div:nth-child(4)::after {
  bottom: -2px;
}
button:hover div:nth-child(4)::before {
  right: -2px;
}
</style>
