<script setup lang="ts">
import HomeHeader from '@/components/ui/HomeHeader.vue'
import HeroSection from '@/components/ui/HeroSection.vue'
import HowItWorks from '@/components/ui/HowItWorks.vue'
import TestimonialList from '@/components/ui/TestimonialList.vue'
import FooterElem from '@/components/ui/FooterElem.vue'
</script>

<template>
  <HomeHeader link="/login" title="Login" />
  <main>
    <HeroSection />
    <HowItWorks />
    <TestimonialList />
  </main>
  <FooterElem />
</template>
