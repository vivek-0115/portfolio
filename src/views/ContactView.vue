<script setup>
import { Icon } from '@iconify/vue'

const handleSubmit = (e) => {
  e.preventDefault()
  // TODO: send form data
  console.log('submit')
}
</script>

<template>
  <section class="border-ob">
    <div class="container mx-auto border-lr flex flex-col">

      <div class="border-ob py-12 px-8">

        <p class=" py-4" style="color: var(--primary-blue);">Contacts</p>
        <p class="text-3xl font-medium">Get In Touch With Me for Collaboration or Queries</p>

      </div>

      <div class="">
        <main class="grid grid-cols-1 md:grid-cols-2">
          <div class="px-8 py-4 border-ob md:border-or">
            <div class="space-y-6">
              <p class="text-gray-700 dark:text-gray-400 text-lg leading-relaxed ">
                We are committed to processing the information in order to contact you and talk
                about your project.
              </p>

              <div class="space-y-4 pt-4">
                <!-- Email -->
                <div class="flex items-center gap-4">
                  <span class="inline-flex items-center justify-center w-12 h-12 border-all">
                    <Icon icon="mdi:email-outline" class="w-6 h-6" />
                  </span>
                  <div class="flex flex-col leading-relaxed">
                    <p>Mail me:</p>
                    <span class="inline-flex gap-4">
                      <a href="mailto:vivekraj0620@gmail.com">Vivek Kumar,</a>
                      <a href="mailto:bytescode0115@gmail.com">Bytes Code</a>
                    </span>
                  </div>
                </div>

                <!-- Address -->
                <div class="flex items-start gap-4">
                  <span class="inline-flex items-center justify-center w-12 h-12 border-all ">
                    <Icon icon="mdi:home-outline" class="w-6 h-6" />
                  </span>
                  <p class="leading-relaxed">
                    Patna, Bihar, 800020 <br />
                    India
                  </p>
                </div>

                <!-- Phone -->
                <div class="flex items-center gap-4">
                  <span class="inline-flex items-center justify-center w-12 h-12 border-all">
                    <Icon icon="mdi:phone-outline" class="w-6 h-6" />
                  </span>
                  <a href="tel:+916207378171">Call me</a>
                </div>

                <div class="flex items-center gap-4">
                  <span class="inline-flex items-center justify-center w-12 h-12 border-all">
                    <Icon icon="mdi:whatsapp" class="w-6 h-6" />
                  </span>
                  <a href="https://wa.me/7254036259">Chat on Whatsapp</a>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-gray-700 dark:text-gray-400 text-lg leading-relaxed ">
                  You can follow me on
                </p>

                <div class="flex flex-row gap-4 mt-4">
                  <a href="https://github.com/vivek-0115" target="_blank" class="border-all p-2 border-hover">
                    <Icon icon="mdi:github" class="w-6 h-6" />
                  </a>

                  <a href="https://www.linkedin.com/in/vivek-0115-kumar/" target="_blank" class="border-all p-2 border-hover">
                    <Icon icon="mdi:linkedin" class="w-6 h-6" />
                  </a>

                  <a href="https://x.com/yourusername" target="_blank" class="border-all p-2 border-hover">
                    <Icon icon="mdi:twitter" class="w-6 h-6" />
                  </a>

                  <a href="https://www.youtube.com/@bytescode-21" target="_blank" class="border-all p-2 border-hover">
                    <Icon icon="mdi:youtube" class="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="px-8 py-4">
            <form class="space-y-5" @submit="handleSubmit">
              <div class="space-y-1">
                <label class="block text-sm font-medium">
                  Name<span class="text-red-500">*</span>
                </label>
                <input type="text" class="w-full border-all px-4 py-3 focus:outline-none" required />
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium ">
                  Email<span class="text-red-500">*</span>
                </label>
                <input type="email" class="w-full border-all px-4 py-3 focus:outline-none" required />
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium">
                  Website<span class="text-red-500">*</span>
                </label>
                <input type="url" class="w-full border-all px-4 py-3 focus:outline-none" required />
              </div>

              <div class="space-y-1">
                <label class="block text-sm font-medium">Message</label>
                <textarea rows="4"
                  class="w-full resize-none border-all px-4 py-3 text-ray-900 focus:outline-none "></textarea>
              </div>

              <button type="submit" class="w-full py-3.5 text-center text-lg font-medium dark:bg-blue-600 bg-blue-500">
                Submit
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>