<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue'
</script>

<template>
  <section class="bg-gray-100 py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">What our users say.</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          feedback="TicketEase has transformed the way our team manages tasks. It's incredibly intuitive and keeps everyone on the same page."
          author="Jane Doe"
          position="Project Manager at Tech Solutions"
        />
        <TestimonialCard
          feedback="I love how easy it is to create and track tickets. The notifications keep me updated, so I never miss a thing!"
          author="John Smith"
          position="Freelance Developer"
        />
        <TestimonialCard
          feedback="Our productivity has significantly increased since we started using TicketEase. It's a game-changer for small businesses."
          author="Emily White"
          position="CEO of Creative Agency"
        />
      </div>
    </div>
  </section>
</template>
