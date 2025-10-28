<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonElem from './ButtonElement.vue'
import type { UserData } from '@/types'
import { SignUp } from '@/server/api'
import { createToken } from '@/server/token'

const router = useRouter()
const fullname = ref('')
const validFullname = ref(true)
const email = ref('')
const validEmail = ref(true)
const phoneNumber = ref('')
const validPhoneNumber = ref(true)
const password = ref('')
const validPassword = ref(true)

const error = ref(false)
const message = ref('')

const click = (url: string) => {
  router.push(url)
}
const generateToken = () => {
  return createToken(fullname.value, email.value)
}
const submit = () => {
  if (validFullname.value && validEmail.value && validPhoneNumber.value && validPassword.value) {
    const userdata: UserData = {
      fullname: fullname.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
    }
    console.log(userdata)
    SignUp(userdata).then((res) => {
      if (res.user) {
        error.value = false
        message.value = 'successfully signed up'
        localStorage.setItem('userdata', JSON.stringify(res.user))
        localStorage.setItem('ticketapp_session', generateToken())
        setTimeout(() => {
          click('/dashboard')
        }, 1000)
        console.log(res)
      } else {
        error.value = true
        message.value = 'something went wrong'
        setTimeout(() => {
          message.value = ''
        }, 2000)
      }
    })
  }
}
const messageClasses = computed(() => ({
  'border-l-4  shadow-md relative transition-all duration-300 ease-in  px-4 py-2 rounded-lg': true,
  'border-l-red-400': error.value,
  'border-l-teal-400': !error.value,
  'opacity-100 left-0': message.value,
  'opacity-0 left-[50%]': !message.value,
}))
const inputClasses = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validFullname.value,
  'border-black': validFullname.value,
}))
const validateFullname = () => {
  if (fullname.value.length > 0 && fullname.value.match('[a-zA-Z]+ [a-zA-Z]+')) {
    validFullname.value = true
  } else {
    validFullname.value = false
  }
}
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
const inputClassesPhoneNumber = computed(() => ({
  'w-full border text-black shadow-lg focus:outline-[#0066FF] focus:shadow-[#0066FF21] rounded-lg h-10 px-4': true,
  'border-red-300 shadow-red-50': !validPhoneNumber.value,
  'border-black': validPhoneNumber.value,
}))
const validatePhoneNumber = () => {
  if (
    phoneNumber.value.length > 0 &&
    phoneNumber.value.match('[0-9]+') &&
    phoneNumber.value.length === 11 &&
    !isNaN(Number(phoneNumber.value))
  ) {
    validPhoneNumber.value = true
  } else {
    validPhoneNumber.value = false
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

    <label for="fullname" class="flex flex-col gap-3 font-bold">
      Fullname
      <input
        type="text"
        id="fullname"
        placeholder="John Doe"
        :value="fullname"
        @input="
          (event: { target: { value: any } }) => {
            fullname = event.target.value
            validateFullname()
          }
        "
        :class="inputClasses"
      />
      <span v-if="!validFullname" aria-live="polite" class="text-red-400 text-sm font-medium">
        Enter valid fullname (i.e FirstName LastName)
      </span>
    </label>

    <label for="email" class="flex flex-col gap-3 font-bold">
      Email
      <input
        type="email"
        id="email"
        placeholder="Johndoe@email.com"
        :value="email"
        @input="
          (event: { target: { value: any } }) => {
            email = event.target.value
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

    <label for="phoneNumber" class="flex flex-col gap-3 font-bold">
      Phone Number
      <input
        type="tel"
        id="phoneNumber"
        placeholder="080242637322"
        :value="phoneNumber"
        @input="
          (event: { target: { value: any } }) => {
            phoneNumber = event.target.value
            validatePhoneNumber()
          }
        "
        :class="inputClassesPhoneNumber"
        required
      />
      <span v-if="!validPhoneNumber" aria-live="polite" class="text-red-400 text-sm font-medium">
        Enter valid phone number (i.e 080606062522)
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
          (event: { target: { value: any } }) => {
            password = event.target.value
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
      text="Sign up"
    />
  </form>
</template>
