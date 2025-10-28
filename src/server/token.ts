export function createToken(username: string, email: string) {
  const header = {
    alg: 'HS256',
    typ: 'JWT',
  }

  const payload = {
    userId: username,
    email: email,
    timestamp: Date.now(),
    exp: Math.floor(Date.now() / 1000) + 5 * 60, // Token expires in 1 hour
  }

  const encodedHeader = btoa(JSON.stringify(header))
  const encodedPayload = btoa(JSON.stringify(payload))

  const signature = 'ticket-app-secrets' // Replace with a strong secret key
  const encodedSignature = btoa(signature)

  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`
}

export function decodeToken(token: string) {
  const [encodedHeader, encodedPayload, encodedSignature] = token.split('.')

  const header = JSON.parse(atob(encodedHeader as string))
  const payload = JSON.parse(atob(encodedPayload as string))
  const signature = atob(encodedSignature as string)

  if (payload.exp * 1000 < Date.now()) {
    return 'invalid token'
  }

  return { header, payload, signature }
}
