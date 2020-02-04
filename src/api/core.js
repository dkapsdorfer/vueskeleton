import axios from 'axios'
import appConfig from '../config'
import VueCookies from 'vue-cookies'
import Store from '../store/'

const coreApi = function () {
  let _client = axios.create({
    baseURL: appConfig.core.apiUrl(),
    timeout: appConfig.core.apiTimeout * 1000,
    headers: {
      'Authorization': VueCookies.get('access_token'),
      'Content-Type': 'application/json'
    }
  })

  /*
   * Axios Request Interceptor.
   * Before each request, use the values in local storage to set new headers.
   */
  _client.interceptors.request.use(
    config => {
      if (config.baseURL === appConfig.core.apiUrl()) {
        config.headers.Authorization = VueCookies.get('access_token')
      }
      return config
    },
    error => Promise.reject(error)
  )

  /*
   * Handle 401 response, redirect to login page
   */
  _client.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 401) {
        Store.dispatch('user/logout')
          .then(() => {
            window.location.href = '/login'
          })
          .catch((error) => {
            console.log(error.response)
          })
      }
      return Promise.reject(error)
    }
  )

  return _client
}

export default coreApi
