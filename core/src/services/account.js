import {methods} from '../helpers/method'

export const accountService = { login }
async function login (email, password) {
  const params = {email, password}
  const slug = '/login'
  const result = await methods.post(params, slug)
  if (result.data.token) {
    localStorage.setItem('user', JSON.stringify(result.data.token))
  }
  return result.status
}

function logout () {
  localStorage.removeItem('user')
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.status
      return Promise.reject(error)
    }

    return data
  })
}
