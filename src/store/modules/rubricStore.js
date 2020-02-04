import CoreApi from '../../api/core'
import RubricModel from '../../model/RubricModel.js'
import RubricFilterService from '../../services/rubric/RubricFilterService'
import Config from '../../config'

const API_NAME = '/rubric'
const LIMIT = 1000

const state = {
  error: null,
  detail: RubricModel,
  list: [],
  all: [],
  totalCount: 0,
  page: 1,
  filter: {
    id: '',
    title: '',
    slug: ''
  }
}

const mutations = {
  storeList(state, responseData) {
    state.list = responseData.data
    state.totalCount = responseData.totalCount
  },
  storeDetail(state, responseData) {
    state.detail = responseData
  },
  storeAll(state, responseData) {
    state.all = responseData.data
  },
  setPage(state, page) {
    state.page = page
  },
  setError(state, message) {
    state.error = message
  },
  setFilter(state, filter) {
    state.filter = filter
  },
  rubricById(state) {
    return id => state.all.find(rubric => {
      if (id === rubric.id) {
        return rubric
      }
    })
  }
}

const actions = {
  fetch(store) {
    store.commit('TOGGLE_LOADING', null, {root: true})
    let offset = (store.state.page * Config.defaults.list.limit) - Config.defaults.list.limit
    let url = API_NAME + '?limit=' + Config.defaults.list.limit + '&offset=' + offset + '&order[id]=desc' +
      RubricFilterService.buildFilterQuery(store.state.filter)
    CoreApi().get(url)
      .then(res => {
        store.commit('storeList', res.data)
        store.commit('TOGGLE_LOADING', null, {root: true})
      })
      .catch(error => {
        console.log(error)
        store.commit('TOGGLE_LOADING', null, {root: true})
      })
  },
  fetchAll({commit}) {
    CoreApi().get(API_NAME + '?limit=' + LIMIT + '&order[root]=asc&order[lvl]=asc&order[sorting]=desc')
      .then(res => {
        commit('storeAll', res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async fetchOne(store, id) {
    await CoreApi().get(API_NAME + '/' + id)
      .then(response => {
        store.commit('storeDetail', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async create(store, record) {
    return await CoreApi().post(API_NAME, JSON.stringify(record))
      .then(response => {
        if (response.status === 201) {
          store.commit('storeDetail', response.data)
          store.commit('setError', null)
        } else {
          store.commit('setError', 'Error')
        }
      })
      .catch(error => {
        store.commit('setError', error.response.status)
      })
  },
  async update(store, record) {
    return await CoreApi().put(API_NAME + '/' + record.id, JSON.stringify(record))
      .then(response => {
        if (response.status === 200) {
          store.commit('storeDetail', response.data)
          store.commit('setError', null)
        } else {
          store.commit('setError', 'Error')
        }
      })
      .catch(error => {
        store.commit('setError', error.response.status)
      })
  },
  async deleteRecord(store, record) {
    return await CoreApi().delete(API_NAME + '/' + record.id)
      .then(response => {
        if (response.status === 204) {
          store.commit('setError', null)
        } else {
          store.commit('setError', 'Error')
        }
      })
      .catch(error => {
        store.commit('setError', error.response.status)
      })
  }
}

const getters = {
  list(state) {
    return state.list
  },
  all(state) {
    return state.all
  },
  totalCount(state) {
    return state.totalCount
  },
  rubricById(state) {
    return id => state.all.find(rubric => {
      if (id === rubric.id) {
        return rubric
      }
    })
  },
  filter(state) {
    return state.filter
  },
  page(state) {
    return state.page
  },
  error(state) {
    return state.error
  },
  detail(state) {
    return state.detail
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
