<script setup lang="ts">
import { getTicket } from '@/server/api'
import type { ticket } from '@/types'
import { onMounted, ref } from 'vue'
import RecentCard from './RecentCard.vue'

const tickets = ref<ticket[]>([])
const isLoading = ref(false)

const getData = async () => {
  const res = await getTicket()
  tickets.value = await res.tickets
  isLoading.value = false
}

onMounted(getData)
</script>

<template>
  <section aria-labelledby="recent-ticket">
    <div className="p-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Recent Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecentCard
          v-for="ticket in tickets.reverse().slice(0, 3)"
          :key="ticket.id"
          :id="ticket.id"
          :title="ticket.title"
          :description="ticket.description"
          :priority="ticket.priority"
          :status="ticket.status"
        />
      </div>
    </div>
  </section>
</template>
