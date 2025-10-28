<script setup lang="ts">
import ButtonElem from '@/components/ui/ButtonElement.vue'
import { useRouter } from 'vue-router'
import LogoutIcon from '../icons/LogoutIcon.vue'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('ticketapp_session')
  router.push('/login')
}
</script>

<template>
  <ButtonElem
    class="py-3 px-4 text-[#e7008a] border border-[#e7008a] hover:bg-[#e7008a] hover:text-white bg-white font-bold active:scale-80 transition-all duration-200 rounded-3xl flex items-center gap-2 w-full"
    type="button"
    @click="logout"
    text="Log out"
    :icon="LogoutIcon"
  />
</template>
