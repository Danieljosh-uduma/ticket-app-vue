<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ButtonElement from './ButtonElement.vue'
import type { ticketType } from '@/types'
import { createTicket, editTicketById, getTicketById } from '@/server/api'
import { useRouter } from 'vue-router'

const prop = defineProps<{
  closeModal: (value: boolean) => void
  id?: string
}>()

const router = useRouter()
const error = ref(false)
const message = ref('')
const title = ref('')
const validtitle = ref(true)
const stat = ref('')
const validStat = ref(true)
const priority = ref('')
const validPriority = ref(true)
const description = ref('')
const validDescription = ref(true)

const messageClasses = computed(() => ({
  'border-l-4  shadow-md relative transition-all duration-300 ease-in  px-4 py-2 rounded-lg': true,
  'border-l-red-400': error.value,
  'border-l-teal-400': !error.value,
  'opacity-100 left-0': message.value,
  'opacity-0 left-[50%]': !message.value,
}))
const inputClassesTitle = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validtitle.value,
  'border-black': validtitle.value,
}))
const validateTitle = () => {
  if (title.value.length >= 3) {
    validtitle.value = true
  } else {
    validtitle.value = false
  }
}

const inputClassesStat = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validStat.value,
  'border-black': validStat.value,
}))
const validateStat = () => {
  if (
    stat.value.toLowerCase() === 'open' ||
    stat.value.toLowerCase() === 'closed' ||
    stat.value.toLowerCase() === 'pending'
  ) {
    validStat.value = true
  } else {
    validStat.value = false
  }
}
const inputClassesPriority = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validPriority.value,
  'border-black': validPriority.value,
}))
const validatePriority = () => {
  if (
    priority.value.toLowerCase() === 'high' ||
    priority.value.toLowerCase() === 'medium' ||
    priority.value.toLowerCase() === 'low'
  ) {
    validPriority.value = true
  } else {
    validPriority.value = false
  }
}
const inputClassesDescription = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] h-30 px-4 focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validDescription.value,
  'border-black': validDescription.value,
}))
const validateDescription = () => {
  if (description.value.length >= 3) {
    validDescription.value = true
  } else {
    validDescription.value = false
  }
}
const getTicket = async () => {
  const res = await getTicketById(prop.id as string)
  if (res) {
    title.value = res.ticket.title
    stat.value = res.ticket.status
    priority.value = res.ticket.priority
    description.value = res.ticket.description
  }
}
const submit = async () => {
  if (validtitle.value && validStat.value && validDescription.value && validPriority.value) {
    const ticketdata: ticketType = {
      title: title.value,
      status: stat.value,
      priority: priority.value,
      description: description.value,
    }
    const ticket = await getTicketById(prop.id as string)
    if (ticket) {
      editTicketById(ticketdata, prop.id as string).then((res) => console.log(res))
      message.value = 'successfully edited ticket'
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } else {
      createTicket(ticketdata).then((res) => console.log(res))
      message.value = 'successfully created ticket'
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    }
  }
}
onMounted(getTicket)
</script>

<template>
  <section class="w-screen h-screen top-0 left-0 z-1000 fixed bg-[rgba(0,0,0,0.5)]">
    <div class="relative">
      <div
        class="fixed top-10 left-3 right-3 sm:left-20 sm:right-20! md:left-[20%] md:right-[20%]! xl:left-[30%] xl:right-[30%]! h-auto rounded-3xl shadow-lg bg-white opacity-100 p-10 z-1001"
      >
        <h2 class="text-3xl font-semibold text-gray-800">Create Tickets</h2>
        <form
          action=""
          class="container flex flex-col gap-4 relative w-full z-50 overflow-hidden"
          @submit.prevent="submit"
        >
          <div :class="messageClasses">
            {{ message }}
          </div>

          <label for="title" class="flex flex-col gap-3 font-bold">
            Title
            <input
              type="text"
              id="title"
              placeholder="Todo or Task"
              :value="title"
              @input="
                (event: { target: { value: any } }) => {
                  title = event.target.value
                  validateTitle()
                }
              "
              :class="inputClassesTitle"
              required
            />
            <span v-if="!validtitle" aria-live="polite" class="text-red-400 text-sm font-medium">
              Title should have at least 3 characters
            </span>
          </label>

          <label for="status" class="flex flex-col gap-3 font-bold">
            Status
            <input
              type="text"
              id="status"
              placeholder="Open"
              :value="stat"
              @input="
                (event: { target: { value: any } }) => {
                  stat = event.target.value
                  validateStat()
                }
              "
              :class="inputClassesStat"
              required
            />
            <span v-if="!validStat" aria-live="polite" class="text-red-400 text-sm font-medium">
              status should be open, closed or pending
            </span>
          </label>
          <label for="priority" class="flex flex-col gap-3 font-bold">
            Priority
            <input
              type="text"
              id="priority"
              placeholder="high"
              :value="priority"
              @input="
                (event: { target: { value: any } }) => {
                  priority = event.target.value
                  validatePriority()
                }
              "
              :class="inputClassesPriority"
            />
            <span v-if="!validPriority" aria-live="polite" class="text-red-400 text-sm font-medium">
              priority should be high, medium or low
            </span> </label
          ><label for="description" class="flex flex-col gap-3 font-bold">
            Description
            <textarea
              id="description"
              placeholder="decsribe your thought"
              :value="description"
              @input="
                (event: { target: { value: any } }) => {
                  description = event.target.value
                  validateDescription()
                }
              "
              :class="inputClassesDescription"
            />
            <span
              v-if="!validDescription"
              aria-live="polite"
              class="text-red-400 text-sm font-medium"
            >
              description should have at least 3 characters
            </span>
          </label>

          <div className="flex justify-center">
            <ButtonElement
              type="submit"
              text="Create ticket"
              v-if="!prop.id"
              class="bg-[#0066FF] text-white py-2.5 px-3 w-auto sm:w-1/3 mx-auto rounded-3xl text-sm sm:text-base font-bold"
            />
            <ButtonElement
              type="submit"
              text="Edit ticket"
              isLoading="{false}"
              v-if="prop.id"
              class="bg-[#0066FF] text-white py-2.5 px-3 w-auto sm:w-1/3 mx-auto rounded-3xl text-sm sm:text-base font-bold"
            />
            <ButtonElement
              type="button"
              isLoading="{false}"
              @click="prop.closeModal"
              text="Cancel"
              class="text-[#0066FF] border border-[#0066FF] hover:bg-[#0066FF] text-sm sm:text-base hover:text-white bg-white py-2.5 w-1/3 mx-auto rounded-3xl font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
