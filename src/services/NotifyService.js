import Vue from 'vue'

const setSuccessMessage = function (message, description = '', duration = 3000, width = 500) {
  Vue.notify({
    group: 'main',
    type: 'success',
    title: message,
    text: description,
    duration: duration,
    closeOnClick: true
  })
}

const setErrorMessage = function (message, description = '', duration = 3000, width = 500) {
  Vue.notify({
    group: 'main',
    type: 'error',
    title: message,
    text: description,
    duration: duration,
    closeOnClick: true
  })
}

const setWarningMessage = function (message, description = '', duration = 3000, width = 500) {
  Vue.notify({
    group: 'main',
    type: 'warn',
    title: message,
    text: description,
    duration: duration,
    closeOnClick: true
  })
}

const setInfoMessage = function (message, description = '', duration = 3000, width = 500) {
  Vue.notify({
    group: 'main',
    type: 'info',
    title: message,
    text: description,
    duration: duration,
    closeOnClick: true
  })
}

export default {
  setSuccessMessage,
  setErrorMessage,
  setWarningMessage,
  setInfoMessage
}
