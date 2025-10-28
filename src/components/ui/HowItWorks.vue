<script setup lang="ts">
import BasicCard from './BasicCard.vue'
import CreateIcon from '../icons/CreateIcon.vue'
import TagIcon from '../icons/TagIcon.vue'
import NotificationIcon from '../icons/NotificationIcon.vue'
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">How it works.</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BasicCard
          title="Create Tickets"
          description="Effortlessly create new tickets for any task or issue. Our intuitive interface makes it quick and simple to log details."
          :icon="CreateIcon"
        />
        <BasicCard
          title="Track Progress"
          description="Monitor the status of your tickets from 'To Do' to 'Done' with our visual tracking board."
          :icon="TagIcon"
        />
        <BasicCard
          title="Get Notified"
          description="Receive real-time notifications about updates and comments on your tickets."
          :icon="NotificationIcon"
        />
      </div>
    </div>
  </section>
</template>
