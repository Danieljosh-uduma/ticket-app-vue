<script setup lang="ts">
import { getTicket } from '@/server/api'
import type { ticket } from '@/types'
import { onMounted, ref } from 'vue'
import ButtonElement from './ButtonElement.vue'
import RecentCard from './RecentCard.vue'
import CreateTicketForm from './CreateTicketForm.vue'

const prop = defineProps<{
  openModal: (value: boolean) => void
}>()
const tickets = ref<ticket[]>([])
const isLoading = ref(false)

const getData = async () => {
  const res = await getTicket()
  tickets.value = await res.tickets
  isLoading.value = false
}
const show = ref(false)
const id = ref('')
const editShow = (value: boolean) => {
  show.value = value
}
const editTicket = (value: string) => {
  id.value = value
  show.value = true
}

onMounted(getData)
</script>

<template>
  <section class="p-10">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-3xl font-semibold text-gray-800">My Tickets</h2>
        <p>
          you have open tickets ({{
            tickets.filter((ticket: { status: string }) => ticket.status === 'open').length
          }}
          total)
        </p>
      </div>
      <ButtonElement
        type="button"
        text="Create Ticket"
        @click="prop.openModal(true)"
        class="bg-[#0066FF] text-white px-4 py-2 rounded-lg"
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecentCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :id="String(ticket.id)"
        :title="ticket.title"
        :description="ticket.description"
        :priority="ticket.priority"
        :status="ticket.status"
        :func="() => editTicket(ticket.id)"
      />

      <CreateTicketForm :key="id" :closeModal="() => editShow(false)" v-if="show" :id="id" />
    </div>
  </section>
</template>
