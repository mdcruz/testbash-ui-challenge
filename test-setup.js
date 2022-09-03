import http from 'k6/http'

export function testSetup() {
  const login = {
    username: 'admin',
    password: 'password'
  }

  http.post('https://automationintesting.online/auth/login', login)
  const res = http.get('https://automationintesting.online/message/')

  if (res.json().messages.length < 0) return

  for (let i = 0; i < res.json().messages.length; i++) {
    http.del(`https://automationintesting.online/message/${res.json().messages[i].id}`)
    console.log(`https://automationintesting.online/message/${res.json().messages[i].id} deleted`)
  }
}