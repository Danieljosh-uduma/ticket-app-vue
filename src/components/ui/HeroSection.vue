<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const click = () => {
  router.push('/signup')
}
</script>

<template>
  <section
    class="text-center px-4 w-full h-[calc(100vh-100px)] relative flex flex-col items-center justify-center"
  >
    <div
      class="absolute top-1/4 left-10 sm:left-20 lg:left-1/4 w-32 h-32 md:w-48 md:h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
    ></div>
    <div
      class="absolute top-1/2 right-10 sm:right-20 lg:right-1/4 w-32 h-32 md:w-48 md:h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
    ></div>

    <div class="relative z-10">
      <h1>Ease it, Tick it.</h1>
      <p class="w-full md:w-3/4 lg:w-2/3 mx-auto text-base md:text-lg text-gray-700">
        Stay organized with our easy-to-use task management tool designed for everyone. Track your
        tasks effortlessly and boost your productivity with our intuitive interface.
      </p>
      <Button
        @click="click"
        class="bg-[#e7008a] text-white font-semibold px-6 py-3 mt-8 rounded-lg text-lg"
        >Getting Started</Button
      >
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0">
      <path
        fill="#0066FF"
        fillOpacity="1"
        d="M0,192L34.3,186.7C68.6,181,137,171,206,192C274.3,213,343,267,411,272C480,277,549,235,617,202.7C685.7,171,754,149,823,144C891.4,139,960,149,1029,170.7C1097.1,192,1166,224,1234,229.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
  </section>
</template>
