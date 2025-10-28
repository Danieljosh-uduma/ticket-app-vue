<script setup lang="ts">
import SideBar from '@/components/ui/SideBar.vue'
import DashboardHeader from '@/components/ui/DashboardHeader.vue'
import OverviewSection from '@/components/ui/OverviewSection.vue'
import RecentTickets from '@/components/ui/RecentTickets.vue'
</script>

<template>
  <SideBar class="hidden" />
  <main className="w-full md:w-[calc(100%-240px)] h-screen md:ml-60">
    <DashboardHeader title="Dashboard" />
    <OverviewSection />
    <RecentTickets />
  </main>
</template>
