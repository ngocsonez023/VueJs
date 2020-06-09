import { authHeader } from '../helpers/auth-header'
import { apiUrl } from '../helpers/config'
import axios from 'axios'

export const methods = {
  post: (param, slug) => {
    return axios
      .post(`${apiUrl}${slug}`, param, authHeader)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(e => {
        this.errors.push(e)
        return e
      })
  }
}
