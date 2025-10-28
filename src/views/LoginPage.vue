<script setup lang="ts">
import HomeHeader from '@/components/ui/HomeHeader.vue'
import FooterElem from '@/components/ui/FooterElem.vue'
import LoginForm from '@/components/ui/LoginForm.vue'
</script>

<template>
  <HomeHeader link="/signup" title="Sign up" />
  <main
    className="flex flex-col md:flex-row justify-between px-5 sm:px-10 gap-5 md:gap-0 md:px-15 lg:px-20 pt-5 grow h-[calc(100vh-200px)]"
  >
    <section className="pt-5 xl:pt-20">
      <h1>Welcome Back!</h1>
      <p className="w-full md:w-3/4 lg:2/3">
        Do you know user can now add
        <strong className="text-[#e7008a]">timelines and expiry date</strong> on tickets.
      </p>
    </section>
    <section
      className="max-w-[500px] md:mt-10 w-full lg:w-1/3 h-[calc(100vh-200px)] flex flex-col items-center mx-auto md:mx-0"
    >
      <LoginForm />
    </section>
  </main>
  <FooterElem />
</template>
