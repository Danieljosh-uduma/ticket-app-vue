<script setup lang="ts">
import { useRouter } from 'vue-router'
import TicketCard from './TicketCard.vue'
import type { ticket } from '@/types'
import { getTicket } from '@/server/api'
import { ref, onMounted } from 'vue'

const tickets = ref<ticket[]>([])
const isLoading = ref(true)
const userDataString = localStorage.getItem('userdata')
const user = userDataString ? JSON.parse(userDataString) : null
const token = localStorage.getItem('ticketapp_session')

const router = useRouter()
const click = (url: string) => {
  router.push(url)
}
if (!token) {
  click('/login')
}
const getData = async () => {
  const res = await getTicket()
  tickets.value = await res.tickets
  isLoading.value = false
}
onMounted(getData)
</script>

<template>
  <section aria-labelledby="Dashboard-overview">
    <div className="p-10">
      <h2 className="text-3xl font-semibold text-gray-800">Welcome, {{ user.fullname }}!</h2>
      <p className="mb-6">Here's is what's happening with your tickets</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TicketCard
          title="Total Tickets"
          textColor="text-[#e7008a]"
          :value="tickets.length"
          v-if="tickets"
        />
        <TicketCard
          title="Open Tickets"
          :value="tickets.filter((ticket: { status: string }) => ticket.status === 'open').length"
          textColor="text-blue-600"
          v-if="tickets"
        />
        <TicketCard
          title="Closed Tickets"
          :value="tickets.filter((ticket: { status: string }) => ticket.status === 'closed').length"
          textColor="text-green-600"
          v-if="tickets"
        />
        <TicketCard
          title="In Progress Tickets"
          :value="
            tickets.filter((ticket: { status: string }) => ticket.status === 'pending').length
          "
          textColor="text-red-600"
          v-if="tickets"
        />
        <TicketCard
          title="High Priority"
          :value="
            tickets.filter((ticket: { priority: string }) => ticket.priority === 'high').length
          "
          textColor="text-yellow-600"
          v-if="tickets"
        />
        <TicketCard
          title="Low Priority"
          :value="
            tickets.filter((ticket: { priority: string }) => ticket.priority === 'low').length
          "
          textColor="text-gray-500"
          v-if="tickets"
        />
      </div>
    </div>
  </section>
</template>
