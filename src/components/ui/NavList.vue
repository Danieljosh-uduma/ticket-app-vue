<script setup lang="ts">
import DashboardIcon from '../icons/DashboardIcon.vue'
import TicketIcon from '../icons/TicketIcon.vue'
import LogoutButton from './LogoutButton.vue'
import NavItem from './NavItem.vue'
</script>

<template>
  <nav class="px-4 flex justify-between flex-col h-full pb-10">
    <ul class="flex flex-col gap-4">
      <NavItem title="Dashboard" url="/dashboard" :icon="DashboardIcon" />
      <NavItem title="Tickets" url="/tickets" :icon="TicketIcon" />
    </ul>
    <LogoutButton />
  </nav>
</template>
