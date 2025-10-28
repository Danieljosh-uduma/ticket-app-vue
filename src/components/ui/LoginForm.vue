<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonElem from './ButtonElement.vue'
import { createToken } from '@/server/token'
import { Login } from '@/server/api'

const router = useRouter()

const email = ref('')
const validEmail = ref(true)

const password = ref('')
const validPassword = ref(true)

const error = ref(false)
const message = ref('')

const click = (url: string) => {
  router.push(url)
}
const token = localStorage.getItem('ticketapp_session')
const generateToken = () => createToken(email.value, password.value)
const submit = () => {
  if (token) {
    click('/dashboard')
  }
  if (validEmail.value && validPassword.value) {
    message.value = 'successfully signed up'
    const userdata = {
      email: email.value,
      password: password.value,
    }
    Login(userdata).then((res) => {
      console.log(res)
      if (res) {
        localStorage.setItem('ticketapp_session', generateToken())
        setTimeout(() => {
          click('/dashboard')
        }, 1000)
      }
    })
    setTimeout(() => {
      click('/dashboard')
    }, 1000)
  }
}

const messageClasses = computed(() => ({
  'border-l-4  shadow-md relative transition-all duration-300 ease-in  px-4 py-2 rounded-lg': true,
  'border-l-red-400': error.value,
  'border-l-teal-400': !error.value,
  'opacity-100 left-0': message.value,
  'opacity-0 left-[50%]': !message.value,
}))
const inputClassesEmail = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validEmail.value,
  'border-black': validEmail.value,
}))
const validateEmail = () => {
  if (email.value.match('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')) {
    validEmail.value = true
  } else {
    validEmail.value = false
  }
}
const inputClassesPassword = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validPassword.value,
  'border-black': validPassword.value,
}))
const validatePassword = () => {
  if (password.value.length > 0 && password.value.length >= 8) {
    validPassword.value = true
  } else {
    validPassword.value = false
  }
}
</script>

<template>
  <form
    action=""
    class="container flex flex-col gap-4 relative w-full z-50 overflow-hidden"
    @submit.prevent="submit"
  >
    <div :class="messageClasses">
      {{ message }}
    </div>

    <label for="email" class="flex flex-col gap-3 font-bold">
      Email
      <input
        type="email"
        id="email"
        placeholder="Johndoe@email.com"
        :value="email"
        @input="
          (event: Event) => {
            email = (event.target as HTMLInputElement)?.value
            validateEmail()
          }
        "
        :class="inputClassesEmail"
        required
      />
      <span v-if="!validEmail" aria-live="polite" class="text-red-400 text-sm font-medium">
        Enter vaild email (i.e johndoe.example.com)
      </span>
    </label>

    <label for="password" class="flex flex-col gap-3 font-bold">
      Password
      <input
        type="password"
        id="password"
        placeholder="******"
        :value="password"
        @input="
          (event: Event) => {
            password = (event.target as HTMLInputElement)?.value
            validatePassword()
          }
        "
        :class="inputClassesPassword"
        required
      />
      <span v-if="!validPassword" aria-live="polite" class="text-red-400 text-sm font-medium">
        password must have 8 or more characters
      </span>
    </label>

    <ButtonElem
      type="submit"
      class="bg-[#0066FF] text-white py-2.5 w-1/3 mx-auto rounded-3xl font-bold"
      text="Log in"
    />
  </form>
</template>
