export type UserData = {
  fullname: string
  email: string
  phoneNumber: string
  password: string
}

export type ticketType = {
  title: string
  status: string
  priority: string
  description: string
}

export type ticket = {
  id: string
  title: string
  description: string
  priority: string
  status: string
  show: boolean
}
