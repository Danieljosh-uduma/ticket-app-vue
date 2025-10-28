<script setup lang="ts">
import SideBar from '@/components/ui/SideBar.vue'
import DashboardHeader from '@/components/ui/DashboardHeader.vue'
import TicketList from '@/components/ui/TicketList.vue'
import CreateTicketForm from '@/components/ui/CreateTicketForm.vue'
import { ref } from 'vue'

const show = ref(false)
const editShow = () => {
  show.value = !show.value
}
</script>

<template>
  <SideBar class="hidden" />
  <main className="w-full md:w-[calc(100%-240px)] h-screen md:ml-60">
    <DashboardHeader title="Dashboard" />
    <TicketList :openModal="editShow" />
    <CreateTicketForm v-if="show" :closeModal="editShow" />
  </main>
</template>
