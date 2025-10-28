<script setup lang="ts">
import HomeHeader from '@/components/ui/HomeHeader.vue'
import FooterElem from '@/components/ui/FooterElem.vue'
import SignupForm from '@/components/ui/SignupForm.vue'
</script>

<template>
  <HomeHeader link="/login" title="Login" />
  <main
    class="flex flex-col md:flex-row justify-between px-5 sm:px-10 gap-5 md:gap-0 md:px-15 lg:px-20 pt-5 grow lg:h-[calc(100vh-200px)]"
  >
    <section class="pt-5 xl:pt-20">
      <h1>Let's Tick Together</h1>
      <p class="w-full md:w-3/4 lg:2/3">
        Start your journey to effective
        <strong class="text-[#e7008a]">task management</strong> today and reach new heights.
      </p>
    </section>
    <section
      className="max-w-[500px] w-full lg:w-1/3 h-[calc(100vh-200px)] flex flex-col items-center mx-auto md:mx-0"
    >
      <SignupForm />
    </section>
  </main>
  <FooterElem />
</template>
